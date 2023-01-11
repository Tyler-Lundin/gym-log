
export interface Theme {
	name: string;
	color: string;
	softColor: string;
	borderColor: string;
	a: string;
	b: string;
	c: string;
	d: string;
	e: string;
}

const light = {
	name: 'light',
	color: 'black',
	softColor: 'rgba(0,0,0,0.5)',
	borderColor: 'rgba(0,0,0,0.2)',
	a: 'rgb(220,220,220)',
	b: 'rgb(200,200,200)',
	c: 'rgb(180,180,180)',
	d: 'rgb(160,160,160)',
	e: 'rgb(140,140,140)',
}

const dark = {
	name: 'dark',
	color: 'white',
	softColor: 'rgba(255,255,255,0.5)',
	borderColor: 'rgba(255,255,255,0.2)',
	a: 'rgb(20,20,20)',
	b: 'rgb(40,40,40)',
	c: 'rgb(60,60,60)',
	d: 'rgb(80,80,80)',
	e: 'rgb(100,100,100)',
}

const fire = {
	name: 'fire',
	color: 'black',
	softColor: 'rgba(0,0,0,0.5)',
	borderColor: 'rgba(255,0,0,0.2)',
	a: 'rgb(150,50,50)',
	b: 'rgb(140,40,40)',
	c: 'rgb(130,30,30)',
	d: 'rgb(120,20,20)',
	e: 'rgb(110,10,10)',
}

const water = {
	name: 'water',
	color: 'white',
	softColor: 'rgba(0,0,0,0.5)',
	borderColor: 'rgba(0,0,255,0.2)',
	a: 'rgb(50,80,200)',
	b: 'rgb(40,70,180)',
	c: 'rgb(30,60,160)',
	d: 'rgb(20,50,140)',
	e: 'rgb(10,40,120)',
}

const grass = {
	name: 'grass',
	color: 'black',
	softColor: 'rgba(0,0,0,0.5)',
	borderColor: 'rgba(0,255,0,0.2)',
	a: 'rgb(50,150,50)',
	b: 'rgb(40,140,40)',
	c: 'rgb(30,130,30)',
	d: 'rgb(20,120,20)',
	e: 'rgb(10,110,10)',
}

const electric = {
	name: 'electric',
	color: 'black',
	softColor: 'rgba(0,0,0,0.5)',
	borderColor: 'rgba(255,255,0,0.2)',
	a: 'rgb(220,170,10)',
    b: 'rgb(210,160,0)',
    c: 'rgb(200,150,0)',
    d: 'rgb(190,140,0)',
    e: 'rgb(180,130,0)',
}

const ice = {
	name: 'ice',
	color: 'white',
	softColor: 'rgba(0,0,0,0.5)',
	borderColor: 'rgba(0,255,255,0.2)',
	a: 'rgb(50,150,150)',
	b: 'rgb(40,140,140)',
	c: 'rgb(30,130,130)',
	d: 'rgb(20,120,120)',
	e: 'rgb(10,110,110)',
}

const poison = {
	name: 'poison',
	color: 'black',
	softColor: 'rgba(0,0,0,0.5)',
	borderColor: 'rgba(255,0,255,0.2)',
	a: 'rgb(150,50,150)',
	b: 'rgb(140,40,140)',
	c: 'rgb(130,30,130)',
	d: 'rgb(120,20,120)',
	e: 'rgb(110,10,110)',
}

const ground = {
	name: 'ground',
	color: 'black',
	softColor: 'rgba(0,0,0,0.5)',
	borderColor: 'rgba(255,255,0,0.2)',
	a: 'rgb(150,100,50)',
	b: 'rgb(140,90,40)',
	c: 'rgb(130,80,30)',
	d: 'rgb(120,70,20)',
	e: 'rgb(110,60,10)',
}

export const tagThemes = [
    light,
    dark,
    fire,
    water,
    grass,
    electric,
    ice,
    poison,
    ground,
]

export {
	light,
	dark,
	fire,
	water,
	grass,
	electric,
	ice,
	poison,
	ground,
}
