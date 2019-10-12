import React from 'react'
import Context from './Context'
import Container from './Container'

export default ({ children }) => {
	const container = Container()
	return <Context.Provider value={container}> {children}</Context.Provider>
}