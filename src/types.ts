export interface Idea {
  id: number
  subject: string
  catalog: string
  detail: string
  longitude: number
  latitude: number
  location: string
  showLocation: string
  creator: string
  creatorAvatar: string
  creatorName: string
  createTime: '2022-03-10T16:15:50Z'
  modifyTime: '2022-03-10T16:15:50Z'
  approveState: 'UN_SUBMIT'
  commentCount: number
  likeCount: number
  collectCount: number
  liked: true
  collected: true
  acceptMessage: string
  acceptCreator: string
  acceptCreatorName: string
  acceptCreatorAvatar: string
  acceptCreateTime: string
  anonymous: boolean
  isPublic: number
  pics?: any[]
}

export interface IdeaDetail {
  id: number
  subject: string
  catalog: string
  detail: string
  longitude: number
  latitude: number
  location: string
  showLocation: string
  creator: string
  creatorAvatar: string
  creatorName: string
  createTime: string
  modifyTime: string
  approveState: string
  commentCount: number
  likeCount: number
  collectCount: number
  liked: boolean
  collected: boolean
  acceptMessage: string
  acceptCreator: string
  acceptCreatorName: string
  acceptCreatorAvatar: string
  acceptCreateTime: string
  anonymous: boolean
  isPublic: number
  pics: any[]
  files: any[]
}

export interface MyDetail {
  approvingCount?: number
  avatar?: string
  confirmingCount?: number | null
  ideas?: any[]
  nickName?: string
  points?: number
  publishedCount?: number
  rejectCount?: number
  totalCount?: number
  unSubmitCount?: number
}
