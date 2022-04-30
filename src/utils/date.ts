import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

const formatDate = (dateText: string, template = 'YYYY-MM-DD'): string => {
  const date = dayjs(dateText)
  const isRecent = Math.abs(date.diff(Date.now(), 'month')) < 6
  return isRecent ? date.fromNow() : date.format(template)
}

export { formatDate }
