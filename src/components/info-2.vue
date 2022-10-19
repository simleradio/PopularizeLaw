<template>
    <div>
      <el-card>
        <template>
          <el-table style="width: 100%">
            <el-table-column prop="appdate" label="法律编号" width="180">
            </el-table-column>
            <el-table-column prop="pname" label="法律类别" width="180">
            </el-table-column>
            <el-table-column prop="oname" label="法律名称" width="180">
            </el-table-column>
            <el-table-column prop="docname" label="颁布时间" width="180">
            </el-table-column>
            <el-table-column label="时效性" width="180">
              <template>
                <span style="color: #e6a23c">已取消</span>
                <span style="color: #67c23a">未就诊</span>
                <span style="color: #909399">已就诊</span>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="180">
              <template>
                <el-button type="" size="mini">查看详情</el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </el-card>
    </div>
  </template>
  
  <script>
  </script>
  
  <style scoped>
  </style>