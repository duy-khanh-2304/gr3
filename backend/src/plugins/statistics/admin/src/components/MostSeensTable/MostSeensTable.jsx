import { Chip, CircularProgress } from '@material-ui/core';
import { Avatar, Box, Flex, IconButton, Table, Tbody, Td, Th, Thead, Tr, Typography, VisuallyHidden } from '@strapi/design-system'
import { Pencil, Trash, Eye } from '@strapi/icons';
import React, {useState, useEffect} from 'react'
import { CONTENT_TYPES } from '../../utils/constants';
import { customDateFormat, formatDate, formatDateToCustomFormat } from '../../utils/helper';
import CollapseSection from '../CollapseSection/CollapseSection'
import styles from './mostSeensTable.module.css'
import {useHistory} from 'react-router-dom'

const MostSeensTable = ({
  onViewFullScreen,
  onExitFullScreen,
  duration,
  loading, 
  types,
  data,
  zoomMostSeensTable
}) => {
  const ROW_COUNT = 6;
  const COL_COUNT = 10;
  const entry = {
    cover: 'https://avatars.githubusercontent.com/u/3874873?v=4',
    description: 'Chez Léon is a human sized Parisian',
    category: 'French cuisine',
    contact: 'Leon Lafrite'
  };
  const entries = [];
  for (let i = 0; i < 5; i++) {
    entries.push({
      ...entry,
      id: i
    });
  }
  const history = useHistory()
  return (
    <CollapseSection
      onViewFullScreen={onViewFullScreen}
      onExitFullScreen={onExitFullScreen}
      defaultOpen
      title="Top posts with the most views"
      id="mostSeensPosts"
    >
      <div>Information from <span style={{fontSize: '16px'}}>{customDateFormat(duration)}</span> to <span style={{fontSize: "16px"}}>{formatDateToCustomFormat()}</span> is displayed.</div>
      <div 
        className={zoomMostSeensTable ? `${styles.tablezoom}` : `${styles.table}`}
        style={{ paddingBottom: '2rem' }}
      >
      {
        loading ? (
          <div className={styles.loadingScreen}>
            <CircularProgress className={styles.postChartProgress} />
          </div>
        ) : (
          <div style={{width: "100%"}}>
            <Table colCount={COL_COUNT} rowCount={ROW_COUNT}>
              <Thead>
                <Tr>
                  <Th>
                    <Typography variant="sigma">Title</Typography>
                  </Th>
                  <Th>
                    <Typography variant="sigma">Image</Typography>
                  </Th>
                  <Th>
                    <Typography variant="sigma">Created At</Typography>
                  </Th>
                  <Th>
                    <Typography variant="sigma">Type</Typography>
                  </Th>
                  <Th>
                    <Typography variant="sigma"># of Views</Typography>
                  </Th>
                  <Th>
                    <VisuallyHidden>Actions</VisuallyHidden>
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.map((entry, index) => (
                  <Tr key={index}>
                    <Td>
                      <Typography textColor="neutral800">{entry.post.title}</Typography>
                    </Td>
                    <Td>
                      <Avatar src={entry.post.post_image.url} alt={entry.post.post_image.alternativeText} />
                    </Td>
                    <Td>
                      <Typography textColor="neutral800">{formatDate(entry.post.createdAt)}</Typography>
                    </Td>
                    <Td>
                      <Typography textColor="neutral800">{entry.contentType}</Typography>
                    </Td>
                    <Td>
                      <Typography textColor="primary600">{entry.views}</Typography>
                    </Td>
                    <Td>
                      <Flex>
                        <IconButton 
                          onClick={
                            () => {
                              const type = (CONTENT_TYPES.find(_ => _.label === entry.contentType)).apiType
                              const id = entry.post.id
                              history.push(`/content-manager/collectionType/api::${type}.${type}/${id}`)
                            }
                          } 
                          label="Edit" 
                          noBorder 
                          icon={<Pencil />} 
                        />
                        <Box paddingLeft={1}>
                        <IconButton 
                            onClick={
                              () => {
                                const url = (CONTENT_TYPES.find(_ => _.label === entry.contentType)).url
                                if(url == "news-and-events"){
                                  const exactUrl = entry.post.tags[0]
                                  const slug = entry.post.slug
                                  window.open(`${BASE_URL}/${exactUrl}/${slug}`, '_blank')
                                }else {
                                  const slug = entry.post.slug
                                  window.open(`${BASE_URL}/${url}/${slug}`, '_blank')
                                }
                              }
                            } 
                            label="See" 
                            noBorder 
                            icon={<Eye />} 
                          />
                        </Box>
                      </Flex>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </div>
        )
      }
      </div>
    </CollapseSection>
  )
}

export default MostSeensTable