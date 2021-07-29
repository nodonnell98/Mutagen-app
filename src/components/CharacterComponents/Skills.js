import React from 'react'

export default function Skills(props) {

  const skillCategoryKeys = props.skills
  const character = props.character

  return (
    <div className="container">
      {skillCategoryKeys.map((skillCategory, i) => {
        let skillKeys = Object.keys(character.skills[skillCategory])
        return (
        skillKeys.map((skill, i) => {
          return (
            <div className="container" key={i}>
              <p>{skill}</p>
              <p>{character.skills[skillCategory][skill]}</p>
            </div>
            );
        })
        )

      })}
    </div>
  )
}
