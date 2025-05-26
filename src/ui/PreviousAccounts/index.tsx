import AccountCard from '@/components/AccountCard'
import { userInfo } from 'os'

const PreviousAccounts = () => {
  return (
    <div>
      <div>
        <h3 className="text-3xl font-bold tracking-wide">Previous Accounts</h3>
        <span className="text-sm">Select your account or add a new one</span>
      </div>
      <div className="flex gap-2 flex-wrap mt-3 max-h-96 overflow-scroll p-2">
        <AccountCard userImg="11" userName="22" />
        <AccountCard userImg="11" userName="22" />

      </div>
    </div>
  )
}

export default PreviousAccounts
