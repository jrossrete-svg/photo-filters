#!/usr/bin/env python3
"""Generates the original sample filter files in samples/filters/.

All three are made from scratch here (procedural drawing/maths), so they can
be shared freely (CC0).  Requires Pillow.
"""
import base64
import io
import json
import math
import os

from PIL import Image, ImageDraw, ImageFilter

OUT = os.path.join(os.path.dirname(__file__), '..', 'samples', 'filters')
os.makedirs(OUT, exist_ok=True)


def clamp(v):
    return max(0.0, min(1.0, v))


def warm_film(r, g, b):
    """Warm, slightly faded film look with teal-ish shadows."""
    l = 0.2126 * r + 0.7152 * g + 0.0722 * b
    # gentle S-curve
    def s(v):
        return v + 0.10 * (v - 0.5) * (1 - abs(2 * v - 1))
    r, g, b = s(r), s(g), s(b)
    # lifted blacks, softened whites
    r, g, b = [0.05 + 0.92 * v for v in (r, g, b)]
    # warm highlights, teal shadows
    w = clamp((l - 0.35) / 0.65)
    sh = clamp((0.45 - l) / 0.45)
    r += 0.06 * w - 0.02 * sh
    g += 0.02 * w + 0.01 * sh
    b += -0.05 * w + 0.03 * sh
    # slight desaturation
    m = (r + g + b) / 3
    r, g, b = [m + 0.9 * (v - m) for v in (r, g, b)]
    return clamp(r), clamp(g), clamp(b)


def write_cube(path, n, fn, title):
    with open(path, 'w') as f:
        f.write(f'# Original sample LUT for Photo Effects (CC0)\nTITLE "{title}"\nLUT_3D_SIZE {n}\n')
        for bi in range(n):
            for gi in range(n):
                for ri in range(n):
                    o = fn(ri / (n - 1), gi / (n - 1), bi / (n - 1))
                    f.write('%.5f %.5f %.5f\n' % o)


def cube_text(n, fn, title):
    buf = io.StringIO()
    buf.write(f'TITLE "{title}"\nLUT_3D_SIZE {n}\n')
    for bi in range(n):
        for gi in range(n):
            for ri in range(n):
                o = fn(ri / (n - 1), gi / (n - 1), bi / (n - 1))
                buf.write('%.4f %.4f %.4f\n' % o)
    return buf.getvalue()


def light_leak(w=1200, h=1600):
    """Warm light leak from the top-left corner plus a pink streak, on a
    transparent background."""
    img = Image.new('RGBA', (w, h), (0, 0, 0, 0))
    px = img.load()
    for y in range(h):
        for x in range(w):
            u, v = x / w, y / h
            d1 = math.hypot(u * 1.0, v * 0.8)  # corner glow
            a1 = clamp(1 - d1 / 0.75) ** 1.6
            # diagonal streak
            t = (u * 0.8 + v * 0.6)
            a2 = math.exp(-((t - 0.55) / 0.08) ** 2) * clamp(1 - v) * 0.55
            a = clamp(a1 + a2)
            if a <= 0.002:
                continue
            k = a1 / (a1 + a2 + 1e-6)
            r = 255
            g = int(150 * k + 120 * (1 - k) + 60 * a1)
            b = int(60 * k + 170 * (1 - k))
            px[x, y] = (r, min(g, 255), min(b, 255), int(a * 235))
    return img.filter(ImageFilter.GaussianBlur(6))


def heart(draw, cx, cy, s, fill):
    pts = []
    for i in range(200):
        t = 2 * math.pi * i / 200
        x = 16 * math.sin(t) ** 3
        y = 13 * math.cos(t) - 5 * math.cos(2 * t) - 2 * math.cos(3 * t) - math.cos(4 * t)
        pts.append((cx + x * s, cy - y * s))
    draw.polygon(pts, fill=fill)


def heart_glasses(w=800, h=300):
    img = Image.new('RGBA', (w, h), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    # frames (slightly larger dark hearts) then tinted lenses
    for cx in (w * 0.27, w * 0.73):
        heart(d, cx, h * 0.52, 10.2, (120, 10, 60, 255))
        heart(d, cx, h * 0.52, 8.6, (255, 70, 140, 200))
        # shine
        d.ellipse([cx - 70, h * 0.30, cx - 30, h * 0.30 + 30], fill=(255, 255, 255, 140))
    d.rounded_rectangle([w * 0.42, h * 0.38, w * 0.58, h * 0.46], radius=10, fill=(120, 10, 60, 255))
    return img.filter(ImageFilter.GaussianBlur(0.8))


def png_bytes(img):
    b = io.BytesIO()
    img.save(b, 'PNG', optimize=True)
    return b.getvalue()


def rosy(r, g, b):
    return clamp(r * 0.96 + 0.05), clamp(g * 0.94 + 0.02), clamp(b * 0.95 + 0.04)


if __name__ == '__main__':
    write_cube(os.path.join(OUT, 'warm-film.cube'), 33, warm_film, 'Warm Film')
    light_leak().save(os.path.join(OUT, 'golden-light-leak.png'), optimize=True)
    preset = {
        'format': 'photo-effects-filter',
        'version': 1,
        'name': 'Heart Glasses',
        'lut': {'cube': cube_text(9, rosy, 'Rosy tint')},
        'sticker': {
            'image': 'data:image/png;base64,' + base64.b64encode(png_bytes(heart_glasses())).decode(),
            'anchor': 'eyes',
            'scale': 1.25,
            'offsetY': 0.0,
            'opacity': 1.0,
        },
    }
    with open(os.path.join(OUT, 'heart-glasses-sticker.json'), 'w') as f:
        json.dump(preset, f, indent=1)
    for n in sorted(os.listdir(OUT)):
        print(n, os.path.getsize(os.path.join(OUT, n)))
