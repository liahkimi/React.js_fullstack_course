import express from "express";
import { faker } from "@faker-js/faker";

const rootRouter = express.Router();

rootRouter.get("/", (req, res) => {
    // 절대 url 생성 후 params 가져오기
    const absoluteUrl = `${req.protocol}://${req.get("host")}${req.originalUrl}`;
    const url = new URL(absoluteUrl);
    const cursor = parseInt(url.searchParams.get("cursor") || 0);

    function generateDate(){
        const lastWeek = new Date(Date.now());
        return faker.date.between({
            from : lastWeek,
            to : Date.now(),
        })
    }

    const fakerPost = [
        {
            postId : cursor + 1,
            User : { id: "sehwan", nickname: "sehwan-kim"},
            content : "Welcome React Query Infinite Scrolling",
            Images : faker.image.urlLoremFlickr(),
            createAt : generateDate()
        },
        {
            postId : cursor + 2,
            User : { id: "hong", nickname: "hong-kim"},
            content : "Welcome React Query Infinite Scrolling",
            Images : faker.image.urlLoremFlickr(),
            createAt : generateDate()
        },
        {
            postId : cursor + 3,
            User : { id: "lss", nickname: "lss-kim"},
            content : "Welcome React Query Infinite Scrolling",
            Images : faker.image.urlLoremFlickr(),
            createAt : generateDate()
        },
        {
            postId : cursor + 4,
            User : { id: "jbg", nickname: "jbg-kim"},
            content : "Welcome React Query Infinite Scrolling",
            Images : faker.image.urlLoremFlickr(),
            createAt : generateDate()
        },
        {
            postId : cursor + 5,
            User : { id: "yong", nickname: "yong-kim"},
            content : "Welcome React Query Infinite Scrolling",
            Images : faker.image.urlLoremFlickr(),
            createAt : generateDate()
        },
        {
            postId : cursor + 6,
            User : { id: "sehwan", nickname: "sehwan-kim"},
            content : "Welcome React Query Infinite Scrolling",
            Images : faker.image.urlLoremFlickr(),
            createAt : generateDate()
        },
        {
            postId : cursor + 7,
            User : { id: "hong", nickname: "hong-kim"},
            content : "Welcome React Query Infinite Scrolling",
            Images : faker.image.urlLoremFlickr(),
            createAt : generateDate()
        },
        {
            postId : cursor + 8,
            User : { id: "lss", nickname: "lss-kim"},
            content : "Welcome React Query Infinite Scrolling",
            Images : faker.image.urlLoremFlickr(),
            createAt : generateDate()
        },
        {
            postId : cursor + 9,
            User : { id: "jbg", nickname: "jbg-kim"},
            content : "Welcome React Query Infinite Scrolling",
            Images : faker.image.urlLoremFlickr(),
            createAt : generateDate()
        },
        {
            postId : cursor + 10,
            User : { id: "yong", nickname: "yong-kim"},
            content : "Welcome React Query Infinite Scrolling",
            Images : faker.image.urlLoremFlickr(),
            createAt : generateDate()
        },
    ]

    return res.json(fakerPost);
})

export default rootRouter;