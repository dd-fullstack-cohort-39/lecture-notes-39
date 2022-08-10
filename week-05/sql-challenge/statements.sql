--  1. Write and execute three insert statements on a strong entity table based on the DDL from question 1. Reminder: Strong Entities have no foreign keys.
INSERT INTO status("statusId", "statusColor", "statusValue") VALUES (GEN_RANDOM_UUID(), '0000FF', 'in progress');

INSERT INTO profile("profileId", "profileAboutMe", "profileEmail", "profileHash","profileName") VALUES (GEN_RANDOM_UUID(), 'I like scrum boards', 'whatever@mysite.com', '$argon2id$v=19$m=65536,t=3,p=1$GKIRUP8gR2QWAwGvxx4u3A$bMZhRfcRyRUWbd3D961UNBbsygZAmdXFupOhWHVHFQ0','scrumIsFun');

INSERT INTO profile("profileId", "profileAboutMe", "profileEmail", "profileHash","profileName") VALUES (GEN_RANDOM_UUID(),'scrum is a waste time and agile is a lie' , 'scrum@mysite.com', '$argon2id$v=19$m=65536,t=3,p=1$GKIRUP8gR2QWAwGvxx4u3A$bMZhRfcRyRUWbd3D961UNBbsygZAmdXFupOhWHVHFQ0','I hate scrum boards');

UPDATE status SET "statusColor" = 'ff0000', "statusValue" = 'blocked' WHERE "statusId" = '70a3d9b9-f35d-4236-acf0-8cae74055669';

DELETE FROM profile WHERE "profileId"= '5b689bff-9088-4e3b-845d-ba6dab574035';


-- ERROR: insert or update on table "project" violates foreign key constraint "project_projectProfileId_fkey"
--     [2022-08-10 09:04:15] Detail: Key (projectProfileId)=(dfb8536e-d428-406c-adc7-88c17806ea71) is not present in table "profile".

INSERT INTO project("projectId", "projectProfileId", "projectDescription", "projectDueDate", "projectName") VALUES(GEN_RANDOM_UUID(), '7eca6d66-d8c0-4b7e-8d9a-e3371a44b9db', 'Super awesome secret project', '2022-09-16 00:30:00.000', 'awesome sauce');

INSERT INTO ticket("ticketId", "ticketProfileId", "ticketProjectId", "ticketDueDate", "ticketDescription", "ticketName") VALUES (GEN_RANDOM_UUID(), '7eca6d66-d8c0-4b7e-8d9a-e3371a44b9db', '23798a0b-2f02-42e6-9507-d6770590e654', now(), 'super easy fun ticket', 'test all the things');

INSERT INTO ticket("ticketId", "ticketProfileId", "ticketProjectId", "ticketDueDate", "ticketDescription", "ticketName") VALUES (GEN_RANDOM_UUID(), '7eca6d66-d8c0-4b7e-8d9a-e3371a44b9db', '23798a0b-2f02-42e6-9507-d6770590e654', now(), 'super easy fun ticket', 'add express to project');

INSERT INTO ticket("ticketId", "ticketProfileId", "ticketProjectId", "ticketDueDate", "ticketDescription", "ticketName") VALUES (GEN_RANDOM_UUID(), '7eca6d66-d8c0-4b7e-8d9a-e3371a44b9db', '23798a0b-2f02-42e6-9507-d6770590e654', now(), 'super easy fun ticket', 'add rest api for tweet');


INSERT INTO "ticketStatus"("ticketStatusStatusId", "ticketStatusTicketId", "ticketStatusDate") VALUES ('70a3d9b9-f35d-4236-acf0-8cae74055669', 'dbe1b39d-7cd4-4f9d-8976-78ca6aa96176', now());

INSERT INTO "ticketStatus"("ticketStatusStatusId", "ticketStatusTicketId", "ticketStatusDate") VALUES ('70a3d9b9-f35d-4236-acf0-8cae74055669','3a02ac71-ae26-4c2e-bb90-4c5de16b54b9', now());

SELECT "ticketId", "ticketProfileId", "ticketProjectId", "ticketDescription", "ticketDueDate", "ticketName" FROM ticket WHERE "ticketId" = '3a02ac71-ae26-4c2e-bb90-4c5de16b54b9';

SELECT "ticketId", "ticketProfileId", "ticketProjectId", "ticketDescription", "ticketDueDate", "ticketName" FROM ticket INNER JOIN "ticketStatus" ON  ticket."ticketId" = "ticketStatus"."ticketStatusTicketId" WHERE "ticketStatus"."ticketStatusStatusId" = '70a3d9b9-f35d-4236-acf0-8cae74055669'


