import { defaultAbiCoder } from '@ethersproject/abi'
import { parseEther } from '@ethersproject/units'
import { Token } from '@sushiswap/sdk'
import { useCallback, useEffect, useState } from 'react'

import { useMisoHelperContract, usePermissionListFactoryContract } from './useContracts'

import { useActiveWeb3React } from '../../hooks/useActiveWeb3React'
import { useBlockNumber } from '../../state/application/hooks'
import { useTransactionAdder } from '../../state/transactions/hooks'
import { getContract } from '../../functions'
import PERMISSION_LIST_ABI from '../../constants/abis/permission-list.json'

function usePermissionList() {
  const permissionListContract = usePermissionListFactoryContract()
  const addTransaction = useTransactionAdder()
  const { library, account } = useActiveWeb3React()

  const deployPermissionList = useCallback(
    async (listOwner: string) => {
      try {
        const tx = await permissionListContract?.deployPointList(listOwner, [], [])
        addTransaction(tx, { summary: 'deploy Permission List' })
        return tx
      } catch (e) {
        console.error('deploy permission list error:', e)
        return e
      }
    },
    [permissionListContract, addTransaction]
  )

  const addNewDeployList = async (contractAddress: string, accounts: string[], amounts: string[]) => {
    try {
      const permissionListContract = getContract(contractAddress, PERMISSION_LIST_ABI, library, account)

      const tx = await permissionListContract?.setPoints(accounts, amounts)
      addTransaction(tx, { summary: 'set points' })
      return tx
    } catch (e) {
      console.error('diploy permission list error:', e)
      return e
    }
  }

  return { deployPermissionList, addNewDeployList }
}

export default usePermissionList
