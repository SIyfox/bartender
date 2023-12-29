import { $host } from "./index"


export const fetchNoticeRequests = async (status) => {
    const {data} = await $host.get('api/requests', { params: { NoticeRequestStatusId: status } })
    return data
}

export const updateNoticeRequests = async (id,NoticeRequestStatusId,NoticeRequestRegistrationNumber) => {
    const {data} = await $host.get('api/requests/update', { params: { id:id,NoticeRequestStatusId: NoticeRequestStatusId,NoticeRequestRegistrationNumber: NoticeRequestRegistrationNumber } })
    return data
}

export const updateAgencyNoticeRequests = async (id,Agency) => {
    const {data} = await $host.get('api/requests/updateAgency', { params: { id:id,Agency: Agency } })
    return data
}