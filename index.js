// repro.js
const fs = require("fs");
const XlsxTemplate = require("xlsx-template");

const run = (name) => {
  // Load template with a shape inside
  const templateBuf = fs.readFileSync(`${name}.xlsx`);
  const template = new XlsxTemplate(templateBuf);

  // Load image file as Buffer
  const imgBuf = fs.readFileSync("sample.png");
  const data = {
    sample: imgBuf,
  };

  // Substitute image into the placeholder ${image:sample} on sheet #1
  template.substitute("template", data);

  // Generate and save output
  const out = template.generate({ type: "nodebuffer" });
  fs.writeFileSync(`output_${name}.xlsx`, out);

  console.log(`Written: output_${name}.xlsx`);
};

run("success");
run("fail");
