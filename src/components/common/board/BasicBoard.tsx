// Shadcn
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronUp } from "lucide-react"
// Css
import styles from "./BasicBoard.module.scss"
import LabelCalendar from "../calendar/LabelCalendar"
import MarkdownDialog from "../dialog/MarkdownDialog"

function BasicBoard() {
  return (
    <div className={styles.container}>
      <div className={styles.container__header}>
        <div className={styles.container__header__titleBox}>
          <Checkbox className="w-5 h-5"/>
          <span className={styles.title}>Please enter title for the board</span>
        </div>
        <Button variant={"ghost"}>
          <ChevronUp className="w-5 h-5 text-gray-400" />
        </Button>
      </div>
      <div className={styles.container__body}>
        <div className={styles.container__body__calendarBox}>
          <LabelCalendar label="from"/>
          <LabelCalendar label="to"/>
        </div>
        <div className={styles.container__body__buttonBox}>
          <Button variant={"ghost"} className="font-normal text-gray-400 hover:bg-green-50 hover:text-green-500">Duplicate</Button>
          <Button variant={"ghost"} className="font-normal text-gray-400 hover:bg-red-50 hover:text-red-500">Delete</Button>
        </div>
      </div>
      <div className={styles.container__footer}>
        <MarkdownDialog />
      </div>
    </div>
  )
}

export default BasicBoard
