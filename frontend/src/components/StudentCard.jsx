import React from "react"
import { Link } from "gatsby"

// Components
import SanityImage from "gatsby-plugin-sanity-image"

// Student card displaying image and name of a student, linking to the specific student
const StudentCard = ({ node }) => {
  console.log(node);
  return (
    <Link to={`/${node.studyprogramme.slug.current}/${node.slug.current}`}>
    
      <div>
        {node.image && <SanityImage asset={node.image._rawAsset} alt={`${node.name}, a student in ${node.name}`} />}
        <p>
          {node.name} {node.surname}
        </p>
      </div>
    </Link>
  )
}

export default StudentCard;
