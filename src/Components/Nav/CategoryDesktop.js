import React from 'react'
import { GiMedicines, GiCrossedPistols, GiChestnutLeaf, GiOverkill, GiAmmoBox, GiMachineGunMagazine } from 'react-icons/gi'
import { RiArrowLeftLine } from 'react-icons/ri'
const CategoryDesktop = () => {
  return (
    <div className='container'>
        <ul className='categoryList'>
            <li className='categoryListItem'><RiArrowLeftLine className='weaponIcon' /> Back</li>
            <li className='categoryListItem'><GiMedicines className='weaponIcon' /> Pills</li>
            <li className='categoryListItem'><GiCrossedPistols className='weaponIcon' /> Glock</li>
            <li className='categoryListItem'><GiChestnutLeaf className='weaponIcon' /> Weed</li>
            <li className='categoryListItem'><GiOverkill className='weaponIcon' /> Category</li>
            <li className='categoryListItem'><GiAmmoBox className='weaponIcon' /> Sandals</li>
            <li className='categoryListItem'><GiMachineGunMagazine className='weaponIcon' /> Ammo</li>
        </ul>
    </div>
  )
}

export default CategoryDesktop