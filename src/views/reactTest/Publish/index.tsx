import "./index.less"
import { Card, Breadcrumb, Form, Button, Radio, Input, Upload, Space, Select, message } from "antd"
import type { UploadFile } from "antd/es/upload/interface"
import { PlusOutlined } from "@ant-design/icons"
import { Link, useSearchParams } from "react-router-dom"
import React, { useEffect, useState } from "react"
import { useChannel } from "@/hooks/test/useChannel"
import axios from "axios"

const { Option } = Select

// 准备表格body数据
const data = [
	{
		id: "82171",
		comment_count: 0,
		channel_id: 1,
		content: "我只是个内容",
		cover: {
			type: 3,
			images: [
				"https://img1.baidu.com/it/u=498751481,2849377151&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=800",
				"https://img2.baidu.com/it/u=576620719,3287590787&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=800",
				"https://img2.baidu.com/it/u=1341676861,1198740308&fm=253&fmt=auto&app=138&f=JPEG?w=475&h=475"
			]
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

const Publish: React.FC = () => {
	// 获取频道列表
	const { channelList } = useChannel()

	// 上传图片
	const [imageList, setImageList] = useState<UploadFile[]>([])
	const onUploadChange = (info: any) => {
		console.log(info)
		setImageList(info.fileList)
	}

	// 切换图片封面类型
	const [imageType, setImageType] = useState(0)
	const onTypeChange = (e: any) => {
		setImageType(e.target.value)
	}

	// 回填数据
	const [searchParams] = useSearchParams()
	const articleId = searchParams.get("id")
	// console.log(articleId)
	// 获取实例
	const [form] = Form.useForm()

	useEffect(() => {
		// 1.通过id拿到数据
		function getDetail() {
			// 获取文章详情
			const res = data.find((item: any) => item.id === articleId)

			if (res) {
				// console.log(res)
				form.setFieldsValue({
					...res,
					type: res.cover.type
				})
				// 设置封面图片
				if (res.cover.type !== undefined) {
					setImageType(res.cover.type)
				} else {
					// 处理 undefined 的情况，例如设置一个默认值
					setImageType(0) // 假设 0 是一个合适的默认值
				}

				setImageList(
					res?.cover.images.map((url, index) => {
						return {
							url,
							name: url,
							uid: index.toString()
						}
					})
				)
			}
		}
		articleId && getDetail()
		// 2.回填数据
	}, [articleId, form])

	// 提交表单
	const onFinish = (formValues: any) => {
		if (imageList.length !== imageType) return message.warn("封面图片数量不对！")
		const { title, channel_id, content } = formValues
		const reqData = {
			title,
			channel_id,
			content,
			cover: {
				type: imageType,
				images: imageList.map(item => {
					if (item.response) {
						return item.response.data.url
					} else if (item.url) {
						return item.url
					}
				})
			}
		}
		console.log(reqData)
		if (articleId) {
			// 编辑文章
			axios.put(`http://geek.itheima.net/v1_0/articles/${articleId}`, reqData).then(res => {
				console.log(res)
			})
		} else {
			// 发布文章
			axios.post("http://geek.itheima.net/v1_0/articles", reqData).then(res => {
				console.log(res)
			})
		}
	}

	return (
		<div className="publish">
			<Card
				title={
					<Breadcrumb>
						<Breadcrumb.Item>
							<Link to={"/home/index"}>首页</Link>
						</Breadcrumb.Item>
						<Breadcrumb.Item>{articleId ? "编辑文章" : "发布文章"}</Breadcrumb.Item>
					</Breadcrumb>
				}
			>
				<Form
					form={form}
					labelCol={{ span: 4 }}
					wrapperCol={{ span: 16 }}
					initialValues={{ type: 0 }}
					onFinish={onFinish}
				>
					<Form.Item label="标题" name="title" rules={[{ required: true, message: "请输入文章标题" }]}>
						<Input placeholder="请输入文章标题" style={{ width: 400 }} />
					</Form.Item>
					<Form.Item label="频道" name="channel_id" rules={[{ required: true, message: "请选择文章频道" }]}>
						<Select placeholder="请选择文章频道" style={{ width: 400 }}>
							{channelList.map((item: any) => (
								<Option key={item.id} value={item.id}>
									{item.name}
								</Option>
							))}
						</Select>
					</Form.Item>
					<Form.Item label="封面">
						<Form.Item name="type">
							<Radio.Group onChange={onTypeChange}>
								<Radio value={1}>单图</Radio>
								<Radio value={3}>三图</Radio>
								<Radio value={0}>无图</Radio>
							</Radio.Group>
						</Form.Item>
						{imageType > 0 && (
							<Upload
								action={"http://geek.itheima.net/v1_0/upload"}
								name="image"
								onChange={onUploadChange}
								maxCount={imageType}
								listType="picture-card"
								fileList={imageList}
								showUploadList
							>
								<div style={{ marginTop: 8 }}>
									<PlusOutlined />
								</div>
							</Upload>
						)}
					</Form.Item>
					<Form.Item label="内容" name="content" rules={[{ required: true, message: "请输入文章内容" }]}>
						<Input placeholder="请输入内容" style={{ width: 400 }} />
					</Form.Item>

					<Form.Item wrapperCol={{ offset: 4 }}>
						<Space>
							<Button size="large" type="primary" htmlType="submit">
								发布文章
							</Button>
						</Space>
					</Form.Item>
				</Form>
			</Card>
		</div>
	)
}

export default Publish
