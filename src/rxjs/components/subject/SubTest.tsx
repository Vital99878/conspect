import React, {ChangeEvent} from 'react';
import './Subject..scss'

const SubTest = ({field, updateField}: {field: string, updateField: (text: string) => void}): JSX.Element => {
    return (
        <div className='subject'>
            <input onChange={(evt: ChangeEvent<HTMLInputElement>) => updateField(evt.target.value)}/>
             <button onClick={() => updateField('button')}>subject</button>
             <p>{field}</p>
        </div>
  )
}

export default SubTest
