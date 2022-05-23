export const host = 'https://api.ostello.co.in'

import { isEmpty } from '../../components/utils'

export const community_group_link =
  'https://chat.whatsapp.com/K2TxCrG5ySo4ryBufzBIqO'

export const AuthenticationHeaders = {
  'Access-Control-Allow-Origin': '*',
  Authorization: `Bearer ${window.localStorage.getItem('access_token')}`,
}

export const isAuthenticated =
  !isEmpty(window.localStorage.getItem('ACCESS_TOKEN')) &&
  !isEmpty(window.localStorage.getItem('OWNER_ID'))

// export const host = 'https://4665-49-207-226-93.in.ngrok.io'

export const CourseDomains = [
  {
    domainName: 'Academics',
    title: 'Junior Secondary School (Class 6-10th)',
    classes: [
      {
        name: 'Class 6',
        subjects: [
          'English',
          'Hindi',
          'Maths',
          'Science',
          'Social Studies',
          'Computer Science',
        ],
      },
      {
        name: 'Class 7',
        subjects: [
          'English',
          'Hindi',
          'Maths',
          'Science',
          'Social Studies',
          'Computer Science',
        ],
      },
      {
        name: 'Class 8',
        subjects: [
          'English',
          'Hindi',
          'Maths',
          'Science',
          'Social Studies',
          'Computer Science',
        ],
      },
      {
        name: 'Class 9',
        subjects: [
          'English',
          'Hindi',
          'Maths',
          'Physics',
          'Chemistry',
          'Biology',
          'Social Studies',
          'Computer Science',
        ],
      },
      {
        name: 'Class 10',
        subjects: [
          'English',
          'Hindi',
          'Maths',
          'Physics',
          'Chemistry',
          'Biology',
          'Social Studies',
          'Computer Science',
        ],
      },
    ],
  },
  {
    domainName: 'Academics',
    title: 'Senior Secondary School (Class 11-12th)',
    classes: ['Class 11', ''],
  },
  {
    domainName: 'Competitive Exams',
    title: 'Competitive Exams',
  },
  {
    domainName: 'Skill Based Courses',
    title: 'Skill Based Courses',
  },
  {
    domainName: 'Graduation',
    title: 'Graduation',
  },
]
