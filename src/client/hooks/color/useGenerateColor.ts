type _TupleOf<T, N extends number, R extends unknown[]> = R['length'] extends N ? R : _TupleOf<T, N, [T, ...R]>

type Tuple<T, N extends number> = N extends N ? (number extends N ? T[] : _TupleOf<T, N, []>) : never

interface RGB {
  red: number
  green: number
  blue: number
}

function hexToRGB(colorValue: string): RGB {
  return {
    red: parseInt(colorValue.substr(1, 2), 16),
    green: parseInt(colorValue.substr(3, 2), 16),
    blue: parseInt(colorValue.substr(5, 2), 16),
  }
}

function pad(number: string, length: number) {
  let str = '' + number
  while (str.length < length) {
    str = '0' + str
  }
  return str
}

function intToHex(rgbInt: number) {
  return pad(Math.min(Math.max(Math.round(rgbInt), 0), 255).toString(16), 2)
}

function rgbToHex(rgb: RGB) {
  return intToHex(rgb.red) + intToHex(rgb.green) + intToHex(rgb.blue)
}

function rgbShade(rgb: RGB, i: number): RGB {
  return {
    red: rgb.red * (1 - 0.1 * i),
    green: rgb.green * (1 - 0.1 * i),
    blue: rgb.blue * (1 - 0.1 * i),
  }
}

function rgbTint(rgb: any, i: number): RGB {
  return {
    red: rgb.red + (255 - rgb.red) * i * 0.1,
    green: rgb.green + (255 - rgb.green) * i * 0.1,
    blue: rgb.blue + (255 - rgb.blue) * i * 0.1,
  }
}

function calculate(colorValue: string, shadeOrTint: (rgb: RGB, i: number) => RGB): string[] {
  const color = hexToRGB(colorValue)
  const shadeValues = []

  for (let i = 0; i < 10; i++) {
    shadeValues[i] = '#' + rgbToHex(shadeOrTint(color, i))
  }

  return shadeValues
}

/**
 * Generate a set of colors for a given color value.
 * @param colorValue The color value to generate shades and tints for.
 */
export function useGenerateColor(colorValue: string): Tuple<string, 10> {
  const tints = calculate(colorValue, rgbTint).reverse()
  const shades = calculate(colorValue, rgbShade)

  const pickedTints = [0, 1, 3, 5, 7, 8, 9]

  return [...pickedTints.map((i) => tints[i]), ...shades.splice(1, 3)] as Tuple<string, 10>
}
