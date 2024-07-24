"use client"

import style from '@/app/(login)/parallel/_component/login.module.css'
import { useState } from 'react';

function LoginModal() {
    const [id, setId] = useState();
    const [password, setPassword] = useState();
    const [message, setMessage] = useState();

    const onClickClose = () => {}
    const onChangeId = () => {}
    const onChangePassword = () => {}
    const onSubmit = () => {}

    return (
        <div className={style.modalBackground}>
            <div className={style.modal}>
                <div className={style.modalHeader}>
                    <button className={style.closeButton} onClick={onClickClose}>
                        <svg width={24} viewBox="0 0 24 24" aria-hidden="true"
                        className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03">
                            <g>
                            <path
                            d="M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z"></path>
                            </g>
                        </svg>
                    </button>
                <div>로그인하세요.</div>
            </div>
            <form onSubmit={onSubmit}>
                <div className={style.modalBody}>
                    <div className={style.inputDiv}>
                        <label className={style.inputLabel} htmlFor="id">아이디</label>
                        <input className={style.input} id="id" type="text" onChange={onChangeId} />
                    </div>
                    <div className={style.inputDiv}>
                        <label className={style.inputLabel} htmlFor="password">비밀번호</label>
                        <input className={style.input} id="password" type="text" onChange={onChangePassword} />
                    </div>
                    <div className={style.message}>{message}</div>
                    <div className={style.modalFooter}>
                        <button className={style.actionsButton}>로그인 하기</button>
                    </div>
                </div>
            </form>
            </div>
        </div>
    );
}

export default LoginModal;