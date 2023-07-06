import noDataLogo from '../../assets/noDataLogo.png'

const Dashboard = () => {
  return (
    <div className='student-dashboard'>
    <img src={noDataLogo} alt="" />
    <div>No assignment yet. Kindly contact your lecturer</div>
    </div>
  )
}

export default Dashboard