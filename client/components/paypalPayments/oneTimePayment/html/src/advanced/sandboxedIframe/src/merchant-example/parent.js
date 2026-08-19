import zoid from 'zoid'
import { config } from '../config'

console.log('Config:', config)

const helloWorld = zoid.create({
  tag: 'hello-world', // This has to be unique per js loaded on the page
  url: `${config.baseUrl}`
})

// Element can be either an string id or a dom element
const element = '#zoid-component'
const options = {}

helloWorld(options).render(element)