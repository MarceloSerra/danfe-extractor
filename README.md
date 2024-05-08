# DANFE EXTRACTOR

Danfe extractor is a Javascript project for dealing with batch DANFE PDFs values extraction process.

## External Libraries

This project uses a lib called [PDF2JSON](https://github.com/modesty/pdf2json)

## Installation

Node version: v18.16.0
Get [Node](https://nodejs.org/en/download/current) from official website or use [NVM](https://nodejs.org/en/download/package-manager)

Inside the root folder, run below command to install the dependencies:

```bash
npm install
```

## Usage

Run below command to execute the main pipeline and an output in `src/output/result.json` containg the result:

```bash
npm run process
```

Result properties:

```javascript
{
    _metadata: {
        timestamp
    },
    data: {
        notes,
        total
    }
}
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Special thanks

- [Modesty](https://github.com/modesty) for creating the PDF2JSON lib.

## License

[ISC](https://opensource.org/license/isc-license-txt)
