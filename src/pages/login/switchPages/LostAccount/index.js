import React, { useState } from 'react';
import { useForm } from 'react-hook-form'

import { LostAccountArea } from './styles'

import LeftArrow from '../../../../assets/left-arrow.svg'
import {Link} from 'react-router-dom'

function SwitchPages() {

      const { register, handleSubmit } = useForm()

      const [email, setEmail] = useState('')

      const handleChange = (e) => {
            setEmail(e.target.value)
      }

      const submit = (data) => {
            console.log(data)
      }

      return (
            <>
                  <LostAccountArea>
                        <div className="header">
                              <div>
                                    <Link to="/"><img src={LeftArrow} alt="" className='back-icon' /></Link>
                              </div>
                              <div className='div-title-header'>
                                    <p className='title-header'>Recuperação de conta</p>
                              </div>
                        </div>
                        <form onSubmit={handleSubmit(submit)}>
                              <div>
                                    <span>E-mail</span>
                                    <input name='email' onChange={handleChange} ref={register({ required: true })} />
                              </div>
                              <button type='submit'>Recuperar</button>

                        </form>
                  </LostAccountArea>
            </>
      )
}

export default SwitchPages;