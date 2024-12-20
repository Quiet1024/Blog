import styles from '../component/alert.module.css'
import cn from  'classnames'
export default function Alert({children, type}) {
    console.log(',,',type === 'success')
    return (
        <div 
        className={cn({
           [styles.success]: type === 'success',
           [styles.error]: type === 'error'
        })}
        >
          { children }
        </div>
    )
}