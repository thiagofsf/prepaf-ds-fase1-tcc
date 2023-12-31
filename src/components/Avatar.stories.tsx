import { Meta, StoryObj } from '@storybook/react'
import { Avatar, Props } from './Avatar'

export default {
    title: 'Components/Image/Avatar',
    component: Avatar,
    tags: ['autodocs'],
    args: {
        image:'./assets/userIcon.svg',
        size:'md',
    },
    argTypes:{
        size: {
            options: ['xs', 'sm', 'md', 'lg', 'xl'],
            control:{
                type: 'inline-radio'
            }
        }
    }
} as Meta<Props>

export const Default: StoryObj<Props> = {}

export const ExtraSmall: StoryObj<Props> = {
    args:{
        size:'xs'
    }
}

export const Small: StoryObj<Props> = {
    args:{
        size:'sm'
    }
}

export const Large: StoryObj<Props> = {
    args:{
        size:'lg'
    }
}

export const ExtraLarge: StoryObj<Props> = {
    args:{
        size:'xl'
    }
}

/**/