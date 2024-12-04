import "./index.less"
import { Card, Breadcrumb, Form, Button, Radio, Input, Upload, Space, Select, message } from "antd"
import { PlusOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"
import React, { useState } from "react"
import { useChannel } from "@/hooks/test/useChannel"

const { Option } = Select

const Publish: React.FC = () => {
	// 获取频道列表
	const { channelList } = useChannel()

	// 提交表单
	const onFinish = (values: any) => {
		if (imageList.length !== imageType) return message.warn("封面图片数量不对！")
		const { title, channel_id, content } = values
		const reqData = {
			title,
			channel_id,
			content,
			cover: {
				type: imageType,
				images: imageList.map(item => item.response.data.url)
			}
		}
		console.log(reqData)
	}

	// 上传图片
	const [imageList, setImageList] = useState([])
	const onUploadChange = (info: any) => {
		console.log(info)
		setImageList(info.fileList)
	}

	// 切换图片封面类型
	const [imageType, setImageType] = useState(0)
	const onTypeChange = (e: any) => {
		setImageType(e.target.value)
	}

	return (
		<div className="publish">
			<Card
				title={
					<Breadcrumb>
						<Breadcrumb.Item>
							<Link to={"/home/index"}>首页</Link>
						</Breadcrumb.Item>
						<Breadcrumb.Item>发布文章</Breadcrumb.Item>
					</Breadcrumb>
				}
			>
				<Form labelCol={{ span: 4 }} wrapperCol={{ span: 16 }} initialValues={{ type: 0 }} onFinish={onFinish}>
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
