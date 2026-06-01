#!/usr/bin/env python3
"""Fix curly quote corruption in .ts/.tsx files written by background agents."""
import sys, os

if len(sys.argv) < 2:
    sys.exit(0)

f = sys.argv[1]
if not f.endswith(('.ts', '.tsx')):
    sys.exit(0)
if not os.path.exists(f):
    sys.exit(0)

with open(f, 'rb') as fh:
    content = fh.read()

if b'\xe2\x80\x98' in content or b'\xe2\x80\x99' in content:
    new_content = content.replace(b'\xe2\x80\x98', b"'").replace(b'\xe2\x80\x99', b"'")
    with open(f, 'wb') as fh:
        fh.write(new_content)
    print(f"Fixed curly quotes in {f}")
