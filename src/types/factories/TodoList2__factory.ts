/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TodoList2, TodoList2Interface } from "../TodoList2";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "content",
        type: "string",
      },
    ],
    name: "TaskAdded",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "completeTask",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_content",
        type: "string",
      },
    ],
    name: "createTask",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getTask",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "content",
            type: "string",
          },
          {
            internalType: "bool",
            name: "completed",
            type: "bool",
          },
        ],
        internalType: "struct TodoList2.Task",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "taskCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tasks",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "content",
        type: "string",
      },
      {
        internalType: "bool",
        name: "completed",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600080553480156200001557600080fd5b506200005c6040518060400160405280601381526020017f4c6561726e20736d617274636f6e7472616374000000000000000000000000008152506200006260201b60201c565b620003c0565b600080815480929190620000769062000303565b919050555060405180606001604052806000548152602001828152602001600015158152506001600080548152602001908152602001600020600082015181600001556020820151816001019080519060200190620000d79291906200013b565b5060408201518160020160006101000a81548160ff0219169083151502179055509050507f2ee7ce8bac091b03a0c391c07ee88a246bdd72bdc6b1ef1ce4d99220595d32c560005482604051620001309291906200023d565b60405180910390a150565b8280546200014990620002cd565b90600052602060002090601f0160209004810192826200016d5760008555620001b9565b82601f106200018857805160ff1916838001178555620001b9565b82800160010185558215620001b9579182015b82811115620001b85782518255916020019190600101906200019b565b5b509050620001c89190620001cc565b5090565b5b80821115620001e7576000816000905550600101620001cd565b5090565b6000620001f88262000271565b6200020481856200027c565b93506200021681856020860162000297565b6200022181620003af565b840191505092915050565b62000237816200028d565b82525050565b60006040820190506200025460008301856200022c565b8181036020830152620002688184620001eb565b90509392505050565b600081519050919050565b600082825260208201905092915050565b6000819050919050565b60005b83811015620002b75780820151818401526020810190506200029a565b83811115620002c7576000848401525b50505050565b60006002820490506001821680620002e657607f821691505b60208210811415620002fd57620002fc62000380565b5b50919050565b600062000310826200028d565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141562000346576200034562000351565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b61098980620003d06000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063111002aa1461005c5780631d65e77e146100785780638d977672146100a8578063b6cb58a5146100da578063e1e29558146100f8575b600080fd5b61007660048036038101906100719190610504565b610114565b005b610092600480360381019061008d9190610545565b6101e7565b60405161009f919061066c565b60405180910390f35b6100c260048036038101906100bd9190610545565b6102cb565b6040516100d1939291906106d9565b60405180910390f35b6100e261038a565b6040516100ef919061068e565b60405180910390f35b610112600480360381019061010d9190610545565b610390565b005b60008081548092919061012690610855565b9190505550604051806060016040528060005481526020018281526020016000151581525060016000805481526020019081526020016000206000820151816000015560208201518160010190805190602001906101859291906103c1565b5060408201518160020160006101000a81548160ff0219169083151502179055509050507f2ee7ce8bac091b03a0c391c07ee88a246bdd72bdc6b1ef1ce4d99220595d32c5600054826040516101dc9291906106a9565b60405180910390a150565b6101ef610447565b6001600083815260200190815260200160002060405180606001604052908160008201548152602001600182018054610227906107f2565b80601f0160208091040260200160405190810160405280929190818152602001828054610253906107f2565b80156102a05780601f10610275576101008083540402835291602001916102a0565b820191906000526020600020905b81548152906001019060200180831161028357829003601f168201915b505050505081526020016002820160009054906101000a900460ff1615151515815250509050919050565b60016020528060005260406000206000915090508060000154908060010180546102f4906107f2565b80601f0160208091040260200160405190810160405280929190818152602001828054610320906107f2565b801561036d5780601f106103425761010080835404028352916020019161036d565b820191906000526020600020905b81548152906001019060200180831161035057829003601f168201915b5050505050908060020160009054906101000a900460ff16905083565b60005481565b600180600083815260200190815260200160002060020160006101000a81548160ff02191690831515021790555050565b8280546103cd906107f2565b90600052602060002090601f0160209004810192826103ef5760008555610436565b82601f1061040857805160ff1916838001178555610436565b82800160010185558215610436579182015b8281111561043557825182559160200191906001019061041a565b5b509050610443919061046a565b5090565b604051806060016040528060008152602001606081526020016000151581525090565b5b8082111561048357600081600090555060010161046b565b5090565b600061049a6104958461073c565b610717565b9050828152602081018484840111156104b257600080fd5b6104bd8482856107b0565b509392505050565b600082601f8301126104d657600080fd5b81356104e6848260208601610487565b91505092915050565b6000813590506104fe8161093c565b92915050565b60006020828403121561051657600080fd5b600082013567ffffffffffffffff81111561053057600080fd5b61053c848285016104c5565b91505092915050565b60006020828403121561055757600080fd5b6000610565848285016104ef565b91505092915050565b6105778161079a565b82525050565b6105868161079a565b82525050565b60006105978261076d565b6105a18185610778565b93506105b18185602086016107bf565b6105ba8161092b565b840191505092915050565b60006105d08261076d565b6105da8185610789565b93506105ea8185602086016107bf565b6105f38161092b565b840191505092915050565b6000606083016000830151610616600086018261064e565b506020830151848203602086015261062e828261058c565b9150506040830151610643604086018261056e565b508091505092915050565b610657816107a6565b82525050565b610666816107a6565b82525050565b6000602082019050818103600083015261068681846105fe565b905092915050565b60006020820190506106a3600083018461065d565b92915050565b60006040820190506106be600083018561065d565b81810360208301526106d081846105c5565b90509392505050565b60006060820190506106ee600083018661065d565b818103602083015261070081856105c5565b905061070f604083018461057d565b949350505050565b6000610721610732565b905061072d8282610824565b919050565b6000604051905090565b600067ffffffffffffffff821115610757576107566108fc565b5b6107608261092b565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b60008115159050919050565b6000819050919050565b82818337600083830152505050565b60005b838110156107dd5780820151818401526020810190506107c2565b838111156107ec576000848401525b50505050565b6000600282049050600182168061080a57607f821691505b6020821081141561081e5761081d6108cd565b5b50919050565b61082d8261092b565b810181811067ffffffffffffffff8211171561084c5761084b6108fc565b5b80604052505050565b6000610860826107a6565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156108935761089261089e565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b610945816107a6565b811461095057600080fd5b5056fea264697066735822122041c77368e454c67096a0fa54e8b8c274b01123fb987534a23328ad6f62f8988864736f6c63430008040033";

export class TodoList2__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TodoList2> {
    return super.deploy(overrides || {}) as Promise<TodoList2>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TodoList2 {
    return super.attach(address) as TodoList2;
  }
  connect(signer: Signer): TodoList2__factory {
    return super.connect(signer) as TodoList2__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TodoList2Interface {
    return new utils.Interface(_abi) as TodoList2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TodoList2 {
    return new Contract(address, _abi, signerOrProvider) as TodoList2;
  }
}
