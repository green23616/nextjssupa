'use client'

import LabelCalendar from "../calendar/LabelCalendar"
import MDEditor from "@uiw/react-md-editor"
// Shadcn
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
// CSS
import styles from "./MarkdownDialog.module.scss"
import { useState } from "react"

function MarkdownDialog() {

  const [contents, setContents] = useState<string | undefined>("**Hello, World!**")

  return (
    <Dialog>
      <DialogTrigger asChild>
        <span className="font-normal text-gray-400 hover:text-gray-500 cursor-pointer">Add Contents</span>
      </DialogTrigger>
      <DialogContent className="max-w-fit">
        <DialogHeader>
          <DialogTitle>
            <div className={styles.dialog__titleBox}>
              <Checkbox className="w-5 h-5"/>
              <input type="text" placeholder="Write a title for your board." className={styles.dialog__titleBox__title} />
            </div>
          </DialogTitle>
          <div className={styles.dialog__calendarBox}>
            <LabelCalendar label="for" />
            <LabelCalendar label="to" />
          </div>
          <Separator/>
          <div className={styles.dialog__markdown}>
            <MDEditor value={contents} height={100 + "%"} onChange={setContents}/>
          </div>
        </DialogHeader>
        <DialogFooter>
          <div className={styles.dialog__buttonBox}>
            <DialogClose asChild>
              <Button variant={"ghost"} className="font-normal text-gray-400 hover:bg-gray-50 hover:text-gray-200" >Done</Button>
            </DialogClose>
            <Button className="font-normal border-green-500 bg-green-400 text-white-400 hover:bg-green-400 hover:text-white" >Submit</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>

  )
}

export default MarkdownDialog
