import {Subject} from 'rxjs';
import {useState} from 'react';

export const useSubject = (): {field: string, updateField: any } => {
  const [field, setFiled] = useState('first')

  const subject = new Subject()
  const data$ = subject.asObservable()

  const updateField = (text: string) => {
    subject.next(text)
  }

  data$.pipe().subscribe((data) => {
    setFiled(data as string)
    console.log('data from subscribe: ', data)
  })

  return {field, updateField}
}
