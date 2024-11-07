// Shadcn
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
// Css
import styles from "./SideNav.module.scss"

function SideNav() {
  return (
    <div className={styles.container}>
      {/* 검색창 */}
      <div className={styles.container__searchBox}>
        <Input type="text" placeholder="검색어를 입력해주세요" className="focus-visible:ring-0"/>
        <Button variant={"outline"} size="icon">
          <Search className="w-4 h-4" />
        </Button>
      </div>
      <div className={styles.container__buttonBox}>
        <Button variant={"outline"} className="w-full text-green-500">Add New Page</Button>
      </div>
      <div className={styles.container__todos}>
        <span className={styles.container__todos__label}>Your todos</span>
      </div>
    </div>
  )
}

export default SideNav
