import {
  DashboardOutlined,
  CustomerServiceOutlined,
  CalculatorOutlined,
  TagsOutlined,
  WechatOutlined,
  FileWordOutlined,
  BankOutlined,
  UserOutlined,
} from '@ant-design/icons';

export const menuItems = [
  {
    key: 'dashboard',
    label: 'Dashboard',
    icon: <DashboardOutlined />,
  },
  {
    key: 'cskh',
    label: 'CSKH',
    icon: <CustomerServiceOutlined />,
    children: [
      {
        key: 'cskh1',
        label: 'CSKH Option 1',
        icon: <CustomerServiceOutlined />,
      },
      {
        key: 'cskh2',
        label: 'CSKH Option 2',
        icon: <CustomerServiceOutlined />,
      },
    ],
  },
  {
    key: 'phongthionline',
    label: 'Phòng thi online',
    icon: <CalculatorOutlined />,
    children: [
      {
        key: 'phongthionline1',
        label: 'Phòng thi online 1',
        icon: <CalculatorOutlined />,
      },
      {
        key: 'phongthionline2',
        label: 'Phòng thi online 2',
        icon: <CalculatorOutlined />,
      },
    ],
  },
  {
    key: 'marketing',
    label: 'Marketing',
    icon: <TagsOutlined />,
    children: [
      {
        key: 'marketing1',
        label: 'Marketing Option 1',
        icon: <TagsOutlined />,
      },
      {
        key: 'marketing2',
        label: 'Marketing Option 2',
        icon: <TagsOutlined />,
      },
    ],
  },
  {
    key: 'quanlysale',
    label: 'Quản lý sale',
    icon: <WechatOutlined />,
    children: [
      {
        key: 'quanlysale1',
        label: 'Quản lý sale Option 1',
        icon: <WechatOutlined />,
      },
      {
        key: 'quanlysale2',
        label: 'Quản lý sale Option 2',
        icon: <WechatOutlined />,
      },
    ],
  },
  {
    key: 'quanlytinhthanh',
    label: 'Quản lý tỉnh thành',
    icon: <FileWordOutlined />,
    children: [
      {
        key: 'quanlytinhthanh1',
        label: 'Quản lý tỉnh thành Option 1',
        icon: <FileWordOutlined />,
      },
      {
        key: 'quanlytinhthanh2',
        label: 'Quản lý tỉnh thành Option 2',
        icon: <FileWordOutlined />,
      },
    ],
  },
  {
    key: 'quanlytruonghoc',
    label: 'Quản lý trường học',
    icon: <BankOutlined />,
    children: [
      {
        key: 'quanlytruonghoc1',
        label: 'Quản lý trường học Option 1',
        icon: <BankOutlined />,
      },
      {
        key: 'quanlytruonghoc2',
        label: 'Quản lý trường học Option 2',
        icon: <BankOutlined />,
      },
    ],
  },
  {
    key: 'quanlynguoidung',
    label: 'Quản lý người dùng',
    icon: <UserOutlined />,
    children: [
      {
        key: 'quanlynguoidung1',
        label: 'Quản lý người dùng Option 1',
        icon: <UserOutlined />,
      },
      {
        key: 'quanlynguoidung2',
        label: 'Quản lý người dùng Option 2',
        icon: <UserOutlined />,
      },
    ],
  },
];

export const content = [
  {
    id: 'dashboard',
    value:
      'Dashboard - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione illo possimus asperiores ab tempore cupiditate minus nostrum iure laborum autem?',
  },
  {
    id: 'cskh1',
    value:
      'CSKH Option 1 - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione illo possimus asperiores ab tempore cupiditate minus nostrum iure laborum autem?',
  },
  {
    id: 'cskh2',
    value:
      'CSKH Option 2 - Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione illo possimus asperiores ab tempore cupiditate minus nostrum iure laborum autem?',
  },
];
