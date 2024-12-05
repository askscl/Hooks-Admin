import { Link, useNavigate } from "react-router-dom"
import { Card, Breadcrumb, Form, Button, Radio, DatePicker, Select, Popconfirm } from "antd"
const { Option } = Select
const { RangePicker } = DatePicker

// 导入资源
import { Table, Tag, Space } from "antd"
import { EditOutlined, DeleteOutlined } from "@ant-design/icons"
import img404 from "@/assets/images/error.png"
import { useChannel } from "@/hooks/test/useChannel"
import { useEffect, useState } from "react"

const Article = () => {
	const navigate = useNavigate()
	// 获取频道列表
	const { channelList } = useChannel()

	// 状态枚举
	const status: { [key: number]: JSX.Element } = {
		0: <Tag color="default">全部</Tag>,
		1: <Tag color="warning">待审核</Tag>,
		2: <Tag color="success">审核通过</Tag>
	}

	// 准备列数据
	const columns = [
		{
			title: "封面",
			dataIndex: "cover",
			width: 120,
			render: (cover: { images: string[] }) => {
				return <img src={cover.images[0] || img404} width={80} height={60} alt="" />
			}
		},
		{
			title: "标题",
			dataIndex: "title",
			width: 220
		},
		{
			title: "状态",
			dataIndex: "status",
			// render: data => <Tag color="green">审核通过</Tag>
			render: (data: number) => status[data]
		},
		{
			title: "发布时间",
			dataIndex: "pubdate"
		},
		{
			title: "阅读数",
			dataIndex: "read_count"
		},
		{
			title: "评论数",
			dataIndex: "comment_count"
		},
		{
			title: "点赞数",
			dataIndex: "like_count"
		},
		{
			title: "操作",
			render: (data: { id: string }) => {
				return (
					<Space size="middle">
						<Button
							type="primary"
							shape="circle"
							icon={<EditOutlined />}
							onClick={() => navigate("/reactTest/publish?id=" + data.id)}
						/>
						<Popconfirm title="确认删除文章吗?" onConfirm={() => confirmDelete(data.id)} okText="Yes" cancelText="No">
							<Button type="primary" danger shape="circle" icon={<DeleteOutlined />} />
						</Popconfirm>
					</Space>
				)
			}
		}
	]

	// 准备表格body数据
	const data = [
		{
			id: "82171",
			comment_count: 0,
			channel_id: 1,
			cover: {
				images: []
			},
			like_count: 0,
			pubdate: "2024-12-01 09:00:00",
			read_count: 2,
			status: 1,
			title: "wkwebview离线化加载h5资源解决方案"
		},
		{
			id: "8212",
			comment_count: 0,
			channel_id: 2,
			cover: {
				images: []
			},
			like_count: 0,
			pubdate: "2024-12-01 09:00:00",
			read_count: 2,
			status: 2,
			title: "wkwebview离线化加载h5资源解决方案"
		},
		{
			id: "8213",
			comment_count: 0,
			channel_id: 3,
			cover: {
				images: []
			},
			like_count: 0,
			pubdate: "2024-12-01 09:00:00",
			read_count: 2,
			status: 1,
			title: "wkwebview离线化加载h5资源解决方案"
		},
		{
			id: "8214",
			comment_count: 0,
			channel_id: 4,
			cover: {
				images: []
			},
			like_count: 0,
			pubdate: "2024-12-01 09:00:00",
			read_count: 2,
			status: 2,
			title: "wkwebview离线化加载h5资源解决方案"
		},
		{
			id: "8215",
			comment_count: 0,
			channel_id: 3,
			cover: {
				images: []
			},
			like_count: 0,
			pubdate: "2024-12-01 09:00:00",
			read_count: 2,
			status: 2,
			title: "wkwebview离线化加载h5资源解决方案"
		},
		{
			id: "8216",
			comment_count: 0,
			channel_id: 4,
			cover: {
				images: []
			},
			like_count: 0,
			pubdate: "2024-12-01 09:00:00",
			read_count: 2,
			status: 2,
			title: "wkwebview离线化加载h5资源解决方案"
		},
		{
			id: "8217",
			comment_count: 0,
			channel_id: 1,
			cover: {
				images: []
			},
			like_count: 0,
			pubdate: "2024-12-01 09:00:00",
			read_count: 2,
			status: 2,
			title: "wkwebview离线化加载h5资源解决方案"
		},
		{
			id: "8218",
			comment_count: 0,
			channel_id: 3,
			cover: {
				images: []
			},
			like_count: 0,
			pubdate: "2024-12-01 09:00:00",
			read_count: 2,
			status: 2,
			title: "wkwebview离线化加载h5资源解决方案"
		},
		{
			id: "8219",
			comment_count: 0,
			channel_id: 4,
			cover: {
				images: []
			},
			like_count: 0,
			pubdate: "2024-12-01 09:00:00",
			read_count: 2,
			status: 2,
			title: "wkwebview离线化加载h5资源解决方案"
		},
		{
			id: "8220",
			comment_count: 0,
			channel_id: 5,
			cover: {
				images: []
			},
			like_count: 0,
			pubdate: "2024-12-01 09:00:00",
			read_count: 2,
			status: 2,
			title: "wkwebview离线化加载h5资源解决方案"
		}
	]

	// 筛选功能
	// 1.准备参数
	const [reqData, setReqData] = useState({
		status: 0,
		channel_id: "",
		begin_pubdate: "",
		end_pubdate: "",
		page: 1,
		per_page: 4
	})

	// 获取文章列表
	type List = {
		id: string
		comment_count: number
		channel_id: number
		cover: { images: never[] }
		like_count: number
		pubdate: string
		read_count: number
		status: number
		title: string
	}[]
	const [list, setList] = useState<List>([])
	const [count, setCount] = useState(0)
	useEffect(() => {
		const res = data.filter(item => {
			if (reqData.status === 0) {
				return item
			} else {
				return item.status === reqData.status
			}
		})
		setList(res)
		// setList(data)
		setCount(res.length)
	}, [reqData])

	type FormValues = { status: any; channel_id: any; date: { format: (arg0: string) => any }[] }

	// 获取筛选数据
	const onFinish = (formValues: FormValues) => {
		setReqData({
			...reqData,
			status: formValues.status,
			channel_id: formValues.channel_id
			// begin_pubdate: formValues.date[0]?.format("YYYY-MM-DD"),
			// end_pubdate: formValues.date[1]?.format("YYYY-MM-DD")
		})
	}

	// 删除
	const confirmDelete = (id: string) => {
		// 模拟接口
		const res = list.filter(item => item.id !== id)
		setList(res)
		setCount(res.length)
		// 触发重新请求表格数据
		// setReqData({
		// 	...reqData,
		// 	page: 1
		// })
	}

	return (
		<div>
			<Card
				title={
					<Breadcrumb>
						<Breadcrumb.Item>
							<Link to={"/home/index"}>首页</Link>
						</Breadcrumb.Item>
						<Breadcrumb.Item>文章列表</Breadcrumb.Item>
					</Breadcrumb>
				}
				style={{ marginBottom: 20 }}
			>
				<Form initialValues={{ status: 0 }} onFinish={onFinish}>
					<Form.Item label="状态" name="status">
						<Radio.Group>
							<Radio value={0}>全部</Radio>
							<Radio value={1}>草稿</Radio>
							<Radio value={2}>审核通过</Radio>
						</Radio.Group>
					</Form.Item>

					<Form.Item label="频道" name="channel_id">
						<Select placeholder="请选择文章频道" style={{ width: 200 }}>
							{channelList.map((item: { id: number; name: string }) => (
								<Option key={item.id} value={item.id}>
									{item.name}
								</Option>
							))}
						</Select>
					</Form.Item>

					<Form.Item label="日期" name="date">
						{/* 传入locale属性 控制中文显示*/}
						<RangePicker></RangePicker>
					</Form.Item>

					<Form.Item>
						<Button type="primary" htmlType="submit" style={{ marginLeft: 40 }}>
							筛选
						</Button>
					</Form.Item>
				</Form>
			</Card>
			<Card title={`根据筛选条件共查询到 ${count} 条结果：`}>
				<Table
					rowKey="id"
					columns={columns}
					dataSource={list}
					pagination={{
						total: count,
						pageSize: reqData.per_page,
						onChange: page => {
							setReqData({
								...reqData,
								page
							})
						}
					}}
				/>
			</Card>
		</div>
	)
}

export default Article
