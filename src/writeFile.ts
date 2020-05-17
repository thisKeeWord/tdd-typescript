import fs from 'fs'

const writeFile = (str: string): void => {
  fs.writeFileSync('data.json', str)
}

export default writeFile
