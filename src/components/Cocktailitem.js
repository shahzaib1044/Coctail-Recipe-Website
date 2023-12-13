import React from 'react'

const Cocktailitem = (props) => {
    let {name, image, ingredients } = props
    return (
      <div>
        <div className="card">
            <div style={{
              display:'flex',
              justifyContent:'flex-end',
              position:'absolute',
              right:'0'
            }}>
            </div>
            <img src={`../images/${image.name}`} className="card-img-top" alt="..." />
            <div className="card-body">
                <h3 className="card-title text-center">{name}</h3>
                <h5>Ingredients</h5>
                {ingredients.map((items)=>{
                    return (<div>{items['ingredient']}</div>)
                })}
            </div>
        </div>
      </div>
    )
}

export default Cocktailitem
