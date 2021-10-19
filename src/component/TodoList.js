import { VerticalTimeline,VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import StarIcon from '@material-ui/icons/Star';
import WorkIcon from '@material-ui/icons/Work';
import DoneIcon from '@mui/icons-material/Done';

const ToDoList = ({toDoList, handleToggle, handleFilter, handleDelete}) => {
    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.target.dataset.id)
    }
    const handleClickDelete = (e)=> {
        e.preventDefault();
        confirmAlert({
            title: 'Thông báo',
            message: 'Bạn có chắc chắn muốn xóa?',
            buttons: [
                {
                label: 'Yes',
                onClick: () => handleDelete(e.target.dataset.id)
                },
                {
                label: 'No',
                }
            ]
        });
    }
    return (
        <div className="contains-list">
            <div className="btn">
                <button onClick={handleFilter}>Clear All Finished Content</button>
            </div>
            <VerticalTimeline>
                {
                    toDoList.map(todo => {
                        const myClass = todo.complete ? "strick" : "nostrick";
                        const Icon = todo.complete ? <DoneIcon /> : <WorkIcon />
                       
                        const btnTitle = todo.complete ? 'Done' : 'Complete';
                        const btnClass = todo.complete ? 'btn_Done' : 'btn_complete';
                        const btnDelete = todo.complete ? 'btn_delete_Done' : 'btn_delete_complete';
                        return (
                            <VerticalTimelineElement className={myClass}
                                    contentStyle={{ background: 'rgb(180, 180, 180)', color: '#fff' }}
                                    contentArrowStyle={{ borderRight: '7px solid  rgb(155, 48, 255)' }}
                                    date={"Deadline: " + todo.dateOf} id={String(todo.id)} icon={Icon}
                                    iconStyle={{ background: 'rgb(155, 48, 255)', color: '#fff' }}>
                                    <button onClick={handleClick} data-id={String(todo.id)}
                                    className={btnClass}>{btnTitle}</button>
                                    <button style={{marginLeft: "5px"}} data-id={String(todo.id)} 
                                    onClick={handleClickDelete} className={btnDelete}>Delete</button>
                                    <p>Content: {todo.task}</p>
                                </VerticalTimelineElement>
                        )
                    })
                }
                <VerticalTimelineElement icon={<StarIcon/>}
                    iconStyle={{ background: 'rgba(0, 0, 225)', color: '#fff' }}>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
};
export default ToDoList;
