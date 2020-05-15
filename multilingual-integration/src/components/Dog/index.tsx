import React from 'react'

import { Img } from './styled'

type DogProps = {
	/**
	 * image path
	 */
	image: string
	/**
	 * alternate image text
	 */
	alt?: string
}

const Dog = ({ image, alt }: DogProps) => (
	<figure>
		<Img src={image} alt={alt} />
	</figure>
)

Dog.defaultProps = {
	alt: 'Dog',
}

export default Dog
