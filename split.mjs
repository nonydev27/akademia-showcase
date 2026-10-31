// One-off script: split App.jsx into section components
import { readFileSync, writeFileSync, mkdirSync } from "fs";

const src = readFileSync("src/App.jsx", "utf8").split("\n");
// lines are 1-indexed in our grep; convert to 0-indexed slices
const marks = [
  ["Nav", 14, 51],
  ["Hero", 52, 95],
  ["Marquee", 96, 102],
  ["Features", 103, 174],
  ["StatsBand", 175, 185],
  ["HowItWorks", 186, 229],
  ["Roles", 230, 275],
  ["Intercept", 276, 306],
  ["DemoReel", 307, 352],
  ["Carousel", 353, 398],
  ["Faq", 399, 500],
  ["Store", 501, 541],
  ["Footer", 542, 604],
];

mkdirSync("src/components", { recursive: true });
const imports = [];
for (const [name, start, end] of marks) {
  const body = src.slice(start - 1, end).join("\n");
  const file = `src/components/${name}.jsx`;
  writeFileSync(
    file,
    `export default function ${name}() {\n  return (\n${body}\n  );\n}\n`,
  );
  imports.push(`import ${name} from './components/${name}.jsx';`);
}
writeFileSync(
  "src/App.jsx",
  `${imports.join("\n")}

export default function App() {
  return (
    <div>
      <div className="progress" id="progress" />
      <div className="cursor-glow" id="cursorGlow" />
${marks.map(([n]) => `      <${n} />`).join("\n")}
    </div>
  );
}
`,
);
console.log("split done:", marks.length, "components");
