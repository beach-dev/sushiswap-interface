import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import Typography from '../../components/Typography'
import { XIcon } from '@heroicons/react/outline'
import { ExclamationCircleIcon } from '@heroicons/react/solid'
import { shortenAddress } from '../../functions'
import Image from '../../components/Image'
import Input from './Input'
import Button from '../../components/Button'

export default function ManualAddresses({ addresses, setAddresses }: any) {
  const { i18n } = useLingui()

  return (
    <div className="mb-4 mr-[200px]">
      <Typography className="text-xl text-primary">{i18n._(t`Create List Manually`)}*</Typography>
      <div className="grid grid-cols-12 my-3 gap-x-4">
        <Typography variant="lg" className="col-span-7 underline text-primary">
          {i18n._(t`Addresses`)}*
        </Typography>
        <Typography variant="lg" className="col-span-4 underline text-primary">
          {i18n._(t`Purchase Amount Limits`)}*
        </Typography>
        <div className="col-span-1"></div>
        {addresses.map((address, index) => [
          <div key={'col_1_' + index} className="col-span-7">
            <Input
              label=""
              value={addresses[index].address}
              type="text"
              placeholder="Enter an address"
              onUserInput={(input) => {
                let items = [...addresses]
                items[index].address = input
                setAddresses(items)
              }}
              padding={false}
            />
          </div>,
          <div key={'col_2_' + index} className="w-full col-span-4">
            <Input
              label=""
              value={addresses[index].purchaseLimit}
              type="decimal"
              placeholder=""
              onUserInput={(input) => {
                let items = [...addresses]
                items[index].purchaseLimit = input
                setAddresses(items)
              }}
              padding={false}
            />
          </div>,
          <XIcon
            key={'col_3_' + index}
            className="col-span-1 w-[20px] h-[20px] text-primary self-center mb-3 cursor-pointer"
            onClick={() => {
              console.log('ok')
              let items = [...addresses]
              items.splice(index, 1)
              setAddresses(items)
            }}
          />,
        ])}
        <div className="flex items-center justify-between col-span-11">
          <Button
            variant="outlined"
            color="gradient_1000"
            onClick={() => {
              const newAddress = { address: '', purchaseLimit: '' }
              setAddresses([...addresses, newAddress])
            }}
          >
            {i18n._(t`Add Another`)}
          </Button>
          <Typography className="text-secondary">{i18n._(`Total Number of Entries: ${addresses.length}`)}</Typography>
        </div>
      </div>

      <div className="flex flex-row items-start p-3 mt-5 space-x-2 rounded bg-purple bg-opacity-20 bg-">
        <ExclamationCircleIcon className="w-5 h-5 mr-2 text-purple" aria-hidden="true" />
        <Typography className="flex-1">
          {i18n._(
            t`Enter a wallet address, and set an amount (in payment token) this address will be able to purchase.  The criteria for who and how much is completely up to you - this list will act like a “guest list” and prevent people who are not on the list from purchasing, and/or prevent people on the list from buying more than their allotted amount.  You can have as many addresses on this list as you’d like.`
          )}
        </Typography>
      </div>
    </div>
  )
}
