// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const hello = "hello"

// document.querySelector(".header__title").innerHTML = hello


const obj = {
	name: "Jessica",
	getname () {
		document.querySelector(".header__title").innerHTML = this.name
	}
}

const man = {
	name: "Peter"
}

// man.getname = obj.getname

const newMan = obj.getname.bind(man)
// newMan()