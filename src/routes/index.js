import { Router} from "express"
const router = Router()

router.get("/",(req,res)=>res.render('index', {title: 'este es el index'}))
router.get("/aboutme",(req,res)=>res.render('aboutme', {title: 'este es el about'}))
router.get("/contact",(req,res)=>res.render('contact', {title: 'este es el contact'}))
router.get("/projects",(req,res)=>res.render('projects', {title: 'este es el contact'}))
export default router