import { t } from '@lingui/macro'
import { useLingui } from '@lingui/react'
import Typography from '../../components/Typography'
import { CloudUploadIcon } from '@heroicons/react/outline'
import { shortenAddress } from '../../functions'
import Image from '../../components/Image'
import { ExclamationCircleIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/solid'
import { useRef, useState } from 'react'

export default function CsvAddresses({ addresses, onManualMode, setAddresses }: any) {
  const { i18n } = useLingui()

  const [status, setStatus] = useState(0)
  const [fileName, setFileName] = useState('')
  const fileinput1 = useRef(null)
  const fileinput2 = useRef(null)
  const fileinput3 = useRef(null)

  const onFileUpload = (e) => {
    const files = e.target.files || e.dataTransfer.files
    if (!files.length) return
    const file = files[0]

    const reader = new FileReader()
    const vm = this
    reader.onload = (e) => {
      try {
        const fileinput = reader.result.toString()
        const arr = fileinput.split('\r\n')
        const points = arr
          .filter((elm) => elm !== '')
          .map((elm) => {
            const childArray = elm.split(',')
            return {
              address: childArray[0],
              purchaseLimit: childArray[childArray.length - 1],
            }
          })

        if (points.length > 0 && points[0].address.slice(0, 2) === '0x' && !isNaN(Number(points[0].purchaseLimit))) {
          setAddresses(points)
          setStatus(1)
        } else {
          setStatus(2)
        }
      } catch (e) {
        setStatus(2)
      }
    }
    reader.readAsText(file)

    setFileName(file.name)
  }

  return (
    <div className="mb-4 mr-[200px] pr-2">
      <Typography className="text-xl text-primary">{i18n._(t`Import Or Create List`)}*</Typography>
      <Typography className="my-1 text-secondary">
        {i18n._(t`Autofill your list by uploading a .csv file below, or create one manually.`)}*
      </Typography>
      <div className="flex my-2 space-x-5">
        {status == 0 && (
          <div
            className="w-[310px] h-[180px] border border-1 border-dashed border-secondary flex flex-col items-center justify-center cursor-pointer"
            onClick={() => {
              fileinput1.current.click()
            }}
          >
            <CloudUploadIcon className="w-[30px] h-[30px] text-secondary" aria-hidden="true" />
            <Typography className="mt-3 text-secondary">{i18n._(t`Choose or Drop a .csv`)}</Typography>
            <Typography className="text-secondary">{i18n._(t`file here to import list`)}</Typography>

            <input type="file" accept=".csv" className="hidden" ref={fileinput1} onChange={onFileUpload} />
          </div>
        )}
        {status == 1 && (
          <div className="w-[310px] h-[180px] border border-1 border-dashed border-secondary flex flex-col items-center justify-center">
            <CheckCircleIcon className="w-[50px] h-[50px] text-green" aria-hidden="true" />
            <Typography className="mt-3 text-secondary">
              {i18n._(`File ${fileName} was uploaded successfully.`)}
            </Typography>
            <div
              className="mt-3 mb-5 text-sm underline cursor-pointer text-blue"
              onClick={() => {
                fileinput2.current.click()
              }}
            >
              Use a different file
            </div>
            <input type="file" accept=".csv" className="hidden" ref={fileinput2} onChange={onFileUpload} />
          </div>
        )}
        {status == 2 && (
          <div className="w-[310px] h-[180px] border border-1 border-dashed border-secondary flex flex-col items-center justify-center">
            <XCircleIcon className="w-[50px] h-[50px] text-[#F5333B]" aria-hidden="true" />
            <Typography className="mt-3 text-secondary">{i18n._(t`Error in processing file ${fileName}`)}</Typography>
            <div
              className="mt-3 mb-5 text-sm underline cursor-pointer text-blue"
              onClick={() => {
                fileinput3.current.click()
              }}
            >
              Use a different file
            </div>
            <input type="file" accept=".csv" className="hidden" ref={fileinput3} onChange={onFileUpload} />
          </div>
        )}
        <Image src="/images/miso/csv_preview.png" width={413} height={180} />
      </div>
      <div className="mt-3 mb-5 text-sm underline cursor-pointer text-blue" onClick={() => onManualMode()}>
        Create List Manually
      </div>
      <div className="flex flex-row items-start p-3 mt-2 space-x-2 rounded bg-purple bg-opacity-20 bg-">
        <ExclamationCircleIcon className="w-5 h-5 mr-2 text-purple" aria-hidden="true" />
        <div>
          <Typography>
            {i18n._(
              t`Autofill your list by uploading a .csv file with the format below, or enter list manually in the next step.`
            )}
          </Typography>
          <Typography className="mt-5">{i18n._(t`CSV Formatting`)}</Typography>
          <Typography className="ml-2">
            &bull;&nbsp;
            {i18n._(t`In your spreadsheet, enter the name of your list as the filename and format the following:`)}
          </Typography>
          <Typography className="ml-2">&bull;&nbsp;{i18n._(t`The word “Address” in column 1A`)}</Typography>
          <Typography className="ml-2">&bull;&nbsp;{i18n._(t`The word “Amount” in column 1B`)}</Typography>
          <Typography className="ml-2">
            &bull;&nbsp;{i18n._(t`Addresses and amounts in subsequent A & B columns, respectively`)}
          </Typography>
          <Typography className="ml-2">
            &bull;&nbsp;{i18n._(t`Export from your spreadsheet application as a .CSV file and upload here`)}
          </Typography>
        </div>
      </div>
    </div>
  )
}
