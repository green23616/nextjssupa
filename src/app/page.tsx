'use client'

import { useRouter } from "next/navigation"
// Shadcn
import { Button } from "@/components/ui/button"
// Css
import styles from "./page.module.scss"

function Home() {

  const router = useRouter()

  return (
    <div className={styles.container}>
      <div className={styles.container__onBoarding}>
        <span className={styles.container__onBoarding__title}>How to Start</span>
        <div className={styles.container__onBoarding__steps}>
          <span>1 Create page</span>
          <span>2 Add boards to page</span>
        </div>
        {/* 페이지 추가 버튼 */}
        <Button variant={"outline"}  onClick={() => router.push("/create")}>Add New Page</Button>
      </div>
    </div>
  )
}

export default Home
