import Image from "next/image";
import Link from "next/link";
import sLogo from '/public/sLogo.png'
import styles from '@/app/(login)/parallel/_component/main.module.css'

// Vanilla Extract
// Styled Component
// tailwind
// css

function Main() {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Image src={sLogo} alt="logo" />
            </div>
            <div className={styles.right}>
                <h1>지금 일어나고 있는 일</h1>
                <h2>지금 가입하세요.</h2>
                <Link href="/parallel/signup" className={styles.signup}>계정 만들기</Link>
                <h2>이미 트위터에 가입하셨나요?</h2>
                <Link href="/parallel/login" className={styles.signin}>로그인</Link>
            </div>
        </div>
    );
}

export default Main;