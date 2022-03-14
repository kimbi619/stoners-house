import React, { useContext, useState } from 'react'
import { GiMedicines, GiLighter, GiCigar, GiWrappedSweet, GiCrossedPistols, GiChestnutLeaf, GiOverkill, GiAmmoBox, GiMachineGunMagazine } from 'react-icons/gi'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { FilteredProductContext } from './FilteredProductContext'


const CategoryDesktop = ({ filterProduct, products }) => {
  const [filteredProduct, setFilteredProduct] = useContext(FilteredProductContext)
  const categories = [
    {
      name: "back",
      icon: <BsFillArrowLeftCircleFill className='weaponIcon' />
    },
    {
      name: "pills",
      icon: <GiMedicines className='weaponIcon' />
    },
    {
      name: "glocks",
      icon: <GiCrossedPistols className='weaponIcon' />
    },
    {
      name: "flowers",
      icon: <GiChestnutLeaf className='weaponIcon' />
    },
    {
      name: "pre-rolls",
      icon: <GiCigar className='weaponIcon' />
    },
    {
      name: "shot guns",
      icon: <GiOverkill className='weaponIcon' />
    },
    {
      name: "Edibles",
      icon: <GiWrappedSweet className='weaponIcon' />
    },
    {
      name: "Accessories",
      icon: <GiLighter className='weaponIcon' />
    },
    {
      name: "Guns",
      icon: <GiAmmoBox className='weaponIcon' />
    },
    {
      name: "Ammo",
      icon: <GiMachineGunMagazine className='weaponIcon' />
    },
]

  const filterProducts = (cat) =>{
    let filteredP = products.filter(product => product.fields.category === cat)
    setFilteredProduct(filteredP)
  }


  return (
    <div className='container'>
        <ul className='categoryList'>
            {
              categories.map((category, index) =>(
                <li key={index} onClick={e=>filterProducts(category.name)} className='categoryListItem'>
                  {category.icon} {category.name}
                </li>
              ))
            }
        </ul>
    </div>
  )
}

export default CategoryDesktop