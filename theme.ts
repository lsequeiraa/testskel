import { Theme } from "@skeletonlabs/skeleton/themes";

const hoyoprofile = {
  "name": "hoyoprofile",
  "properties": {
    "--space-scale-factor": "1",
    "--type-scale-factor": "1.0",
    "--type-scale-1": "calc(0.75rem * var(--type-scale-factor))",
    "--type-scale-2": "calc(0.875rem * var(--type-scale-factor))",
    "--type-scale-3": "calc(1rem * var(--type-scale-factor))",
    "--type-scale-4": "calc(1.125rem * var(--type-scale-factor))",
    "--type-scale-5": "calc(1.25rem * var(--type-scale-factor))",
    "--type-scale-6": "calc(1.5rem * var(--type-scale-factor))",
    "--type-scale-7": "calc(1.875rem * var(--type-scale-factor))",
    "--type-scale-8": "calc(2.25rem * var(--type-scale-factor))",
    "--type-scale-9": "calc(3rem * var(--type-scale-factor))",
    "--type-scale-10": "calc(3.75rem * var(--type-scale-factor))",
    "--type-scale-11": "calc(4.5rem * var(--type-scale-factor))",
    "--type-scale-12": "calc(6rem * var(--type-scale-factor))",
    "--type-scale-13": "calc(8rem * var(--type-scale-factor))",
    "--base-font-color": "var(--color-surface-950)",
    "--base-font-color-dark": "var(--color-surface-50)",
    "--base-font-family": "system-ui, sans-serif",
    "--base-font-size": "inherit",
    "--base-line-height": "inherit",
    "--base-font-weight": "normal",
    "--base-font-style": "normal",
    "--base-letter-spacing": "0em",
    "--heading-font-color": "var(--color-surface-950)",
    "--heading-font-color-dark": "var(--color-surface-50)",
    "--heading-font-family": "inherit",
    "--heading-font-weight": "bold",
    "--heading-font-style": "normal",
    "--heading-letter-spacing": "inherit",
    "--anchor-font-color": "var(--color-primary-500)",
    "--anchor-font-color-dark": "var(--color-primary-500)",
    "--anchor-font-family": "inherit",
    "--anchor-font-size": "inherit",
    "--anchor-line-height": "inherit",
    "--anchor-font-weight": "normal",
    "--anchor-font-style": "normal",
    "--anchor-letter-spacing": "inherit",
    "--anchor-text-decoration": "none",
    "--anchor-text-decoration-hover": "underline",
    "--anchor-text-decoration-active": "none",
    "--anchor-text-decoration-focus": "none",
    "--body-background-color": "var(--color-surface-50)",
    "--body-background-color-dark": "var(--color-surface-950)",
    "--radii-default": "6px",
    "--radii-container": "12px",
    "--border-width-default": "1px",
    "--ring-width-default": "1px",
    "--outline-width-default": "1px",
    "--divide-width-default": "1px",
    "--color-primary-50": "217 240 255",
    "--color-primary-100": "192 216 242",
    "--color-primary-200": "166 192 229",
    "--color-primary-300": "141 167 217",
    "--color-primary-400": "115 143 204",
    "--color-primary-500": "90 119 191",
    "--color-primary-600": "72 99 168",
    "--color-primary-700": "54 79 144",
    "--color-primary-800": "36 59 121",
    "--color-primary-900": "18 39 97",
    "--color-primary-950": "0 19 74",
    "--color-primary-contrast-dark": "var(--color-primary-950)",
    "--color-primary-contrast-light": "var(--color-primary-50)",
    "--color-primary-contrast-50": "var(--color-primary-contrast-dark)",
    "--color-primary-contrast-100": "var(--color-primary-contrast-dark)",
    "--color-primary-contrast-200": "var(--color-primary-contrast-dark)",
    "--color-primary-contrast-300": "var(--color-primary-contrast-dark)",
    "--color-primary-contrast-400": "var(--color-primary-contrast-dark)",
    "--color-primary-contrast-500": "var(--color-primary-contrast-dark)",
    "--color-primary-contrast-600": "var(--color-primary-contrast-light)",
    "--color-primary-contrast-700": "var(--color-primary-contrast-light)",
    "--color-primary-contrast-800": "var(--color-primary-contrast-light)",
    "--color-primary-contrast-900": "var(--color-primary-contrast-light)",
    "--color-primary-contrast-950": "var(--color-primary-contrast-light)",
    "--color-secondary-50": "255 255 255",
    "--color-secondary-100": "239 232 254",
    "--color-secondary-200": "223 208 253",
    "--color-secondary-300": "207 185 253",
    "--color-secondary-400": "191 161 252",
    "--color-secondary-500": "175 138 251",
    "--color-secondary-600": "150 116 226",
    "--color-secondary-700": "125 94 201",
    "--color-secondary-800": "99 72 176",
    "--color-secondary-900": "74 50 151",
    "--color-secondary-950": "49 28 126",
    "--color-secondary-contrast-dark": "var(--color-secondary-950)",
    "--color-secondary-contrast-light": "var(--color-secondary-50)",
    "--color-secondary-contrast-50": "var(--color-secondary-contrast-dark)",
    "--color-secondary-contrast-100": "var(--color-secondary-contrast-dark)",
    "--color-secondary-contrast-200": "var(--color-secondary-contrast-dark)",
    "--color-secondary-contrast-300": "var(--color-secondary-contrast-dark)",
    "--color-secondary-contrast-400": "var(--color-secondary-contrast-dark)",
    "--color-secondary-contrast-500": "var(--color-secondary-contrast-dark)",
    "--color-secondary-contrast-600": "var(--color-secondary-contrast-dark)",
    "--color-secondary-contrast-700": "var(--color-secondary-contrast-light)",
    "--color-secondary-contrast-800": "var(--color-secondary-contrast-light)",
    "--color-secondary-contrast-900": "var(--color-secondary-contrast-light)",
    "--color-secondary-contrast-950": "var(--color-secondary-contrast-light)",
    "--color-tertiary-50": "255 255 159",
    "--color-tertiary-100": "253 245 127",
    "--color-tertiary-200": "250 234 95",
    "--color-tertiary-300": "248 224 64",
    "--color-tertiary-400": "245 213 32",
    "--color-tertiary-500": "243 203 0",
    "--color-tertiary-600": "216 180 0",
    "--color-tertiary-700": "190 157 0",
    "--color-tertiary-800": "163 133 0",
    "--color-tertiary-900": "137 110 0",
    "--color-tertiary-950": "110 87 0",
    "--color-tertiary-contrast-dark": "var(--color-tertiary-950)",
    "--color-tertiary-contrast-light": "var(--color-tertiary-50)",
    "--color-tertiary-contrast-50": "var(--color-tertiary-contrast-dark)",
    "--color-tertiary-contrast-100": "var(--color-tertiary-contrast-dark)",
    "--color-tertiary-contrast-200": "var(--color-tertiary-contrast-dark)",
    "--color-tertiary-contrast-300": "var(--color-tertiary-contrast-dark)",
    "--color-tertiary-contrast-400": "var(--color-tertiary-contrast-dark)",
    "--color-tertiary-contrast-500": "var(--color-tertiary-contrast-dark)",
    "--color-tertiary-contrast-600": "var(--color-tertiary-contrast-dark)",
    "--color-tertiary-contrast-700": "var(--color-tertiary-contrast-dark)",
    "--color-tertiary-contrast-800": "var(--color-tertiary-contrast-light)",
    "--color-tertiary-contrast-900": "var(--color-tertiary-contrast-light)",
    "--color-tertiary-contrast-950": "var(--color-tertiary-contrast-light)",
    "--color-success-50": "170 255 236",
    "--color-success-100": "152 249 228",
    "--color-success-200": "134 244 219",
    "--color-success-300": "116 238 211",
    "--color-success-400": "98 233 202",
    "--color-success-500": "80 227 194",
    "--color-success-600": "65 191 164",
    "--color-success-700": "50 155 133",
    "--color-success-800": "35 118 103",
    "--color-success-900": "20 82 72",
    "--color-success-950": "5 46 42",
    "--color-success-contrast-dark": "var(--color-success-950)",
    "--color-success-contrast-light": "var(--color-success-50)",
    "--color-success-contrast-50": "var(--color-success-contrast-dark)",
    "--color-success-contrast-100": "var(--color-success-contrast-dark)",
    "--color-success-contrast-200": "var(--color-success-contrast-dark)",
    "--color-success-contrast-300": "var(--color-success-contrast-dark)",
    "--color-success-contrast-400": "var(--color-success-contrast-dark)",
    "--color-success-contrast-500": "var(--color-success-contrast-dark)",
    "--color-success-contrast-600": "var(--color-success-contrast-dark)",
    "--color-success-contrast-700": "var(--color-success-contrast-dark)",
    "--color-success-contrast-800": "var(--color-success-contrast-light)",
    "--color-success-contrast-900": "var(--color-success-contrast-light)",
    "--color-success-contrast-950": "var(--color-success-contrast-light)",
    "--color-warning-50": "255 239 207",
    "--color-warning-100": "253 228 183",
    "--color-warning-200": "252 217 158",
    "--color-warning-300": "250 207 134",
    "--color-warning-400": "249 196 109",
    "--color-warning-500": "247 185 85",
    "--color-warning-600": "230 163 69",
    "--color-warning-700": "213 142 53",
    "--color-warning-800": "195 120 37",
    "--color-warning-900": "178 99 21",
    "--color-warning-950": "161 77 5",
    "--color-warning-contrast-dark": "var(--color-warning-950)",
    "--color-warning-contrast-light": "var(--color-warning-50)",
    "--color-warning-contrast-50": "var(--color-warning-contrast-dark)",
    "--color-warning-contrast-100": "var(--color-warning-contrast-dark)",
    "--color-warning-contrast-200": "var(--color-warning-contrast-dark)",
    "--color-warning-contrast-300": "var(--color-warning-contrast-dark)",
    "--color-warning-contrast-400": "var(--color-warning-contrast-dark)",
    "--color-warning-contrast-500": "var(--color-warning-contrast-dark)",
    "--color-warning-contrast-600": "var(--color-warning-contrast-dark)",
    "--color-warning-contrast-700": "var(--color-warning-contrast-light)",
    "--color-warning-contrast-800": "var(--color-warning-contrast-light)",
    "--color-warning-contrast-900": "var(--color-warning-contrast-light)",
    "--color-warning-contrast-950": "var(--color-warning-contrast-light)",
    "--color-error-50": "247 212 214",
    "--color-error-100": "246 182 181",
    "--color-error-200": "245 152 149",
    "--color-error-300": "245 123 116",
    "--color-error-400": "244 93 84",
    "--color-error-500": "243 63 51",
    "--color-error-600": "224 50 41",
    "--color-error-700": "205 38 31",
    "--color-error-800": "186 25 20",
    "--color-error-900": "167 13 10",
    "--color-error-950": "148 0 0",
    "--color-error-contrast-dark": "var(--color-error-950)",
    "--color-error-contrast-light": "var(--color-error-50)",
    "--color-error-contrast-50": "var(--color-error-contrast-dark)",
    "--color-error-contrast-100": "var(--color-error-contrast-dark)",
    "--color-error-contrast-200": "var(--color-error-contrast-dark)",
    "--color-error-contrast-300": "var(--color-error-contrast-dark)",
    "--color-error-contrast-400": "var(--color-error-contrast-dark)",
    "--color-error-contrast-500": "var(--color-error-contrast-light)",
    "--color-error-contrast-600": "var(--color-error-contrast-light)",
    "--color-error-contrast-700": "var(--color-error-contrast-light)",
    "--color-error-contrast-800": "var(--color-error-contrast-light)",
    "--color-error-contrast-900": "var(--color-error-contrast-light)",
    "--color-error-contrast-950": "var(--color-error-contrast-light)",
    "--color-surface-50": "160 226 247",
    "--color-surface-100": "134 202 222",
    "--color-surface-200": "109 178 198",
    "--color-surface-300": "83 154 173",
    "--color-surface-400": "58 130 149",
    "--color-surface-500": "32 106 124",
    "--color-surface-600": "26 85 104",
    "--color-surface-700": "19 64 83",
    "--color-surface-800": "13 43 63",
    "--color-surface-900": "6 22 42",
    "--color-surface-950": "0 1 22",
    "--color-surface-contrast-dark": "var(--color-surface-950)",
    "--color-surface-contrast-light": "var(--color-surface-50)",
    "--color-surface-contrast-50": "var(--color-surface-contrast-dark)",
    "--color-surface-contrast-100": "var(--color-surface-contrast-dark)",
    "--color-surface-contrast-200": "var(--color-surface-contrast-dark)",
    "--color-surface-contrast-300": "var(--color-surface-contrast-dark)",
    "--color-surface-contrast-400": "var(--color-surface-contrast-dark)",
    "--color-surface-contrast-500": "var(--color-surface-contrast-light)",
    "--color-surface-contrast-600": "var(--color-surface-contrast-light)",
    "--color-surface-contrast-700": "var(--color-surface-contrast-light)",
    "--color-surface-contrast-800": "var(--color-surface-contrast-light)",
    "--color-surface-contrast-900": "var(--color-surface-contrast-light)",
    "--color-surface-contrast-950": "var(--color-surface-contrast-light)"
  }
} satisfies Theme;

export default hoyoprofile;