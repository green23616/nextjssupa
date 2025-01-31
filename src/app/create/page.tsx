import Image from "next/image"
import LabelCalendar from "@/components/common/calendar/LabelCalendar"
// Shadcn
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
// Css
import styles from "./page.module.scss"
import BasicBoard from "@/components/common/board/BasicBoard"

function Create() {
  return (
    <div className={styles.container}>
      <header className={styles.container__header}>
        <div className={styles.container__header__contents}>
          <input type="text" placeholder="Enter Title Here" className={styles.input} />
          <div className={styles.progressBar}>
            <span className={styles.progressBar__status}>0/10 Completed</span>
            {/* Progress Bar UI */}
            <Progress value={33} className="w-[30%] h-2" indicatorColor="bg-green-500"/>
          </div>
          <div className={styles.calendarBox}>
            <div className={styles.calendarBox__calendar}>
              {/* Calendar UI */}
              <LabelCalendar label="from" readonly={true}/>
              <LabelCalendar label="to" readonly={true}/>
            </div>
            <Button variant={"outline"} className="w-[15%] border-green-500 text-white bg-green-400 hover:bg-green-500 hover:text-white">Add New Board</Button>
          </div>
        </div>
      </header>
      <main className={styles.container__body}>
        {/* <div className={styles.container__body__infoBox}>
          <span className={styles.title}>No board remaining</span>
          <span className={styles.subTitle}>Click the button and start flashing</span>
          <button className={styles.button}>
            <Image src="/assets/images/round-button.svg" alt="round-button" width={100} height={100} />
          </button>
        </div> */}
        <BasicBoard/>
      </main>
    </div>
    )
}

export default Create
