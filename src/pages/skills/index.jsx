import React from 'react'
import Experience from '../../Components/Experience'
import Education from '../../Components/Education'
import DevSkills from '../../Components/DevSkills'
import DesignSkills from '../../Components/DesignSkills'

const Skills = () => {
  return (
    <div>
      <h1 className='font-medium text-4xl px-12 pt-20 pb-16'>SKILLS</h1>
      <div className='grid md:grid-cols-2'>
        <DevSkills />
        <DesignSkills />
        <Experience />
        <Education />
      </div>
    </div>
  )
}

export default Skills