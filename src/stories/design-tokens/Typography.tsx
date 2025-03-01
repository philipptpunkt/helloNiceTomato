import { Label } from "../components/Label"
import { Spacer } from "../components/Spacer"

export function Typography() {
  return (
    <>
      <div>
        <Label text="Headings" />
      </div>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      <Spacer />
      <hr className="ignore-check" />
      <div>
        <Label text="Text" />
      </div>
      <p>Body</p>
      <p className="text-textDisabled-light dark:text-textDisabled-dark">
        Disabled
      </p>
      <p className="text-textLabel-light dark:text-textLabel-dark">Label</p>
      <Spacer />
      <hr className="ignore-check" />
    </>
  )
}
