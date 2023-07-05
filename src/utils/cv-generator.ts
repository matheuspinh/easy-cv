import { AlignmentType, Document, HeadingLevel, Packer, Paragraph } from 'docx'
import { saveAs } from 'file-saver'

export default function generateDocument(data: any) {
  const doc = new Document({
    creator: data.fullName,
    title: data.fullName + '-CV',
    styles: {
      default: {
        heading1: {
          run: {
            bold: true,
            color: '#000000',
          },
        },
        document: {
          run: {
            font: 'Calibri',
          },
        },
      },
    },
    sections: [
      {
        children: [
          new Paragraph({
            text: data.fullName,
            heading: HeadingLevel.HEADING_1,
            alignment: AlignmentType.CENTER,
          }),
          new Paragraph({
            text: data.email,
          }),
          new Paragraph({
            text: `${data.city}, ${data.state}`,
          }),
          new Paragraph({
            text: data.phone,
          }),
        ],
      },
    ],
  })
  Packer.toBlob(doc).then((blob) => {
    console.log(data)
    console.log(blob)
    saveAs(blob, `${data.fullName}.docx`)
  })
}
